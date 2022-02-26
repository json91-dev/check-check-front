import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RendingScreen from "./RendingScreen/RendingScreen";
import CheckListScreen from "./CheckListScreen/CheckListScreen";


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName = "RendingScreen"
    >
      <Stack.Screen name="RendingScreen" options={{ headerShown: false}} component={RendingScreen}/>
      <Stack.Screen name="CheckListScreen" options={{ headerShown: false}} component={CheckListScreen}/>
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
