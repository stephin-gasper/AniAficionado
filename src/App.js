import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

const App = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text style={[styles.sectionDescription]} testID="sampleTestId">
          Sample text
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default App;
