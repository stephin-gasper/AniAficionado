import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components/native';

import theme from 'constants/theme';
import {HOME, EPISODE} from 'constants/route';
import Home from 'screens/home/Home';
import Episode from 'screens/episode/Episode';
import Header from 'components/header/Header';

const Stack = createNativeStackNavigator();

const App = () => {
  const MemoizedHeader = useCallback(() => <Header />, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={HOME}
          screenOptions={{
            header: MemoizedHeader,
          }}>
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={EPISODE} component={Episode} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
