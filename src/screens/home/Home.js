import React, {useCallback, useState} from 'react';
import {View, InteractionManager} from 'react-native';
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
      {latestEpisodes.map((episode) => (
        <Cards key={episode.id} {...episode} />
      ))}
    </View>
  );
};

export default Home;
