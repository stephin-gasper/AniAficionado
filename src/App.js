import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

const App = () => (
  <NavigationContainer>
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={[styles.sectionDescription]} testID="sampleTestId">
            Sample text
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
