import React, {useCallback, useState} from 'react';
import {FlatList, View, InteractionManager, Text} from 'react-native';
import {getLatestEpisodes} from 'services/anime';
import {useFocusEffect} from '@react-navigation/native';

import Cards from './cards';

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

  const renderItem = ({item}) => <Cards {...item} />;

  return (
    <View>
      <Choose>
        <When condition={showLoader}>
          <Text testID="loaderText">Loading...</Text>
        </When>
        <When condition={latestEpisodes.length > 0}>
          <FlatList
            data={latestEpisodes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
