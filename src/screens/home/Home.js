import React, {useCallback, useState} from 'react';
import {InteractionManager, Text, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  getInitialLatestSubbedEpisodes,
  getLatestSubbedEpisodes,
} from 'services/anime';
import Pills from 'components/pills/Pills';
import Button from 'components/button/Button';
import Spinner from 'components/spinner/Spinner';

import Cards from './cards';
import {CardWrapper, Container} from './Home.style';

const pillsList = ['Sub', 'Dub', 'All', 'Popular', 'Movies'];

const Home = () => {
  const [latestEpisodes, setLatestEpisodes] = useState();
  const [showLoader, setShowLoader] = useState(true);
  const [showMoreResultsButton, setShowMoreResultsButton] = useState(true);

  const showMoreResultsOnPress = () => {
    setShowLoader(true);
    getLatestSubbedEpisodes()
      .then(({list, canLoadMoreResults}) => {
        setLatestEpisodes([...latestEpisodes, ...list]);
        setShowMoreResultsButton(canLoadMoreResults);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        getInitialLatestSubbedEpisodes().then(data => {
          setLatestEpisodes(data);
          setShowLoader(false);
        });
      });

      return () => task.cancel();
    }, []),
  );

  return (
    <Container>
      <If condition={latestEpisodes}>
        <ScrollView testID="scrollView" showsVerticalScrollIndicator={false}>
          <Pills list={pillsList} onPillPress={() => {}} />
          <Choose>
            <When condition={latestEpisodes.length > 0}>
              <CardWrapper testID="cardWrapper">
                <For each="item" of={latestEpisodes}>
                  <Cards key={item.id} {...item} />
                </For>
              </CardWrapper>
              <If condition={showMoreResultsButton}>
                <Button
                  testID="showMoreResultsButton"
                  onPress={showMoreResultsOnPress}
                  iconName="chevron-down"
                  iconComponent={MaterialCommunityIcons}
                  iconSize={22}
                  style={{
                    paddingLeft: 20,
                    paddingTop: 10.5,
                    paddingBottom: 10.5,
                  }}>
                  Show more results
                </Button>
              </If>
            </When>
            <Otherwise>
              <Text testID="noResponseText">
                No anime&apos;s to show, please retry
              </Text>
            </Otherwise>
          </Choose>
        </ScrollView>
      </If>
      <If condition={showLoader}>
        <Spinner />
      </If>
    </Container>
  );
};

export default Home;
