import React, {useCallback, useState} from 'react';
import {InteractionManager, Text, ScrollView} from 'react-native';
import {getLatestEpisodes} from 'services/anime';
import {useFocusEffect} from '@react-navigation/native';

import Cards from './cards';
import {Container} from './Home.style';

const Home = () => {
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        getLatestEpisodes().then((data) => {
          setLatestEpisodes(data);
          setShowLoader(false);
        });
      });

      return () => task.cancel();
    }, []),
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      alwaysBounceVertical="false"
      bounces="false">
      <Container>
        <Choose>
          <When condition={showLoader}>
            <Text testID="loaderText">Loading...</Text>
          </When>
          <When condition={latestEpisodes.length > 0}>
            <For each="item" of={latestEpisodes}>
              <Cards key={item.id} {...item} />
            </For>
          </When>
          <Otherwise>
            <Text testID="noResponseText">
              No anime&apos;s to show, please retry
            </Text>
          </Otherwise>
        </Choose>
      </Container>
    </ScrollView>
  );
};

export default Home;
