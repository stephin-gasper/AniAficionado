import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/home';
import Header from './components/header';

const Stack = createNativeStackNavigator();

const App = () => {
  const MemoizedHeader = useCallback(() => <Header />, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: MemoizedHeader,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
