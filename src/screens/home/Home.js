import React, {useCallback, useState} from 'react';
import {View, InteractionManager, Text} from 'react-native';
import {getLatestEpisodes} from 'services/anime';
import {useFocusEffect} from '@react-navigation/native';

import Cards from './cards';

const Home = () => {
  const [latestEpisodes, setLatestEpisodes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        getLatestEpisodes().then((data) => {
          setLatestEpisodes(data);
        });
      });

      return () => task.cancel();
    }, []),
  );

  return (
    <View>
      <Choose>
        <When condition={latestEpisodes.length > 0}>
          {latestEpisodes.map((episode) => (
            <Cards key={episode.id} {...episode} />
          ))}
        </When>
        <Otherwise>
          <Text testID="noResponseText">
            No anime&apos;s to show, please retry
          </Text>
        </Otherwise>
      </Choose>
    </View>
  );
};

export default Home;
