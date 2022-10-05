import React, {useCallback, useState} from 'react';
import {InteractionManager, Text, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {getInitialLatestSubbedEpisodes} from 'services/anime';

import Cards from './cards';
import {CardWrapper, Container} from './Home.style';

const Home = () => {
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Choose>
          <When condition={showLoader}>
            <Text testID="loaderText">Loading...</Text>
          </When>
          <When condition={latestEpisodes.length > 0}>
            <CardWrapper>
              <For each="item" of={latestEpisodes}>
                <Cards key={item.id} {...item} />
              </For>
            </CardWrapper>
          </When>
          <Otherwise>
            <Text testID="noResponseText">
              No anime&apos;s to show, please retry
            </Text>
          </Otherwise>
        </Choose>
      </ScrollView>
    </Container>
  );
};

export default Home;
