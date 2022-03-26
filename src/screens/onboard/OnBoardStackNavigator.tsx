import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoardPage1 from './OnBoardPage1/OnBoardPage1';
import OnBoardPage2 from './OnBoardPage2/OnBoardPage2';
import OnBoardPage3 from './OnBoardPage3/OnBoardPage3';
import OnBoardLogin from './OnBoardLogin/OnBoardLogin';

const Stack = createNativeStackNavigator();

const OnBoardStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName = "OnBoardLogin"
    >
      <Stack.Screen name="OnBoardPage1" options={{ headerShown: false}} component={OnBoardPage1}/>
      <Stack.Screen name="OnBoardPage2" options={{ headerShown: false}} component={OnBoardPage2}/>
      <Stack.Screen name="OnBoardPage3" options={{ headerShown: false}} component={OnBoardPage3}/>
      <Stack.Screen name="OnBoardLogin" options={{ headerShown: false}} component={OnBoardLogin}/>
    </Stack.Navigator>
);
}

export default OnBoardStackNavigator;
