import React, {useRef, useState, useEffect} from 'react';
import {InteractionManager, Text, ScrollView, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Anime from 'services/anime';
import Pills from 'components/pills/Pills';
import Button from 'components/button/Button';
import Spinner from 'components/spinner/Spinner';

import Card from './cards';
import {CardWrapper, Container, ContentWrapper, styles} from './Home.style';

const pillsList = ['Sub', 'Dub', 'All', 'Popular', 'Movies'];

const Home = () => {
  const anime = useRef();

  const [latestEpisodes, setLatestEpisodes] = useState();
  const [showLoader, setShowLoader] = useState(true);
  const [showMoreResultsButton, setShowMoreResultsButton] = useState(true);

  const showMoreResultsOnPress = () => {
    setShowLoader(true);
    anime.current
      .getLatestSubbedEpisodes()
      .then(({list, canLoadMoreResults}) => {
        setLatestEpisodes([...latestEpisodes, ...list]);
        setShowMoreResultsButton(canLoadMoreResults);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      setShowLoader(true);
      anime.current = new Anime();
      anime.current.getInitialLatestSubbedEpisodes().then(data => {
        setLatestEpisodes(data);
        setShowLoader(false);
      });
    });

    return () => task.cancel();
  }, []);

  return (
    <Container>
      <If condition={latestEpisodes}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          testID="scrollView"
          showsVerticalScrollIndicator={false}>
          <ContentWrapper>
            <View>
              <Pills list={pillsList} onPillPress={() => {}} />
            </View>
            <Choose>
              <When condition={latestEpisodes.length > 0}>
                <CardWrapper testID="cardWrapper">
                  <For each="item" index="idx" of={latestEpisodes}>
                    <Card key={item.id} {...item} />
                  </For>
                </CardWrapper>
                <If condition={showMoreResultsButton}>
                  <Button
                    testID="showMoreResultsButton"
                    onPress={showMoreResultsOnPress}
                    iconName="chevron-down"
                    iconComponent={MaterialCommunityIcons}
                    iconSize={22}
                    style={styles.showMoreResultButton}>
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
          </ContentWrapper>
        </ScrollView>
      </If>
      <If condition={showLoader}>
        <Spinner />
      </If>
    </Container>
  );
};

export default Home;
