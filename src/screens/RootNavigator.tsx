// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardStackNavigator from './onboard/OnBoardStackNavigator'
import MainStackNavigator from "./main/MainStackNavigator";
import {useEffect} from "react";


// import TestStackNavigator from './test/TestStackNavigator';

const Stack = createNativeStackNavigator();

const App = ({ navigation }: {navigation: any}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onBoard">
        <Stack.Screen
          name="onBoard"
          component={OnBoardStackNavigator}
          options={{ headerShown: false}}  />
        <Stack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{ headerShown: false}}  />

        {/*<Stack.Screen*/}
        {/*name="Test"*/}
        {/*component={TestStackNavigator}*/}
        {/*options={{ headerShown: false}}  />*/}

      </Stack.Navigator>
    </NavigationContainer>

);
}


export default App;
