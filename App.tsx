import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigation} from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <FadeScreen/>
      {/* <Navigation /> */}
    </NavigationContainer>
  );
};
