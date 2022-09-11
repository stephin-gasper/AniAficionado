import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components/native';

import Home from 'screens/home';
import theme from 'constants/theme';
import Header from './components/header';

const Stack = createNativeStackNavigator();

const App = () => {
  const MemoizedHeader = useCallback(() => <Header />, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: MemoizedHeader,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
