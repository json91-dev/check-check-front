import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoardPage1 from './OnBoardPage1';
import OnBoardPage2 from './OnBoardPage2';

const Stack = createNativeStackNavigator();

function OnBoardStackNavigator () {
  return (
    <Stack.Navigator
      initialRouteName = "MapScreen"

    >
      <Stack.Screen name="OnBoardPage1" options={{ headerShown: false}} component={OnBoardPage1}/>
      <Stack.Screen name="OnBoardPage2" options={{ headerShown: false}} component={OnBoardPage2}/>
    </Stack.Navigator>
);
}

export default OnBoardStackNavigator;
