import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RendingPage from "./TestScreen/TestScreen";

const Stack = createNativeStackNavigator();

const TestStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName = "TestScreen"
    >
      <Stack.Screen name="TestScreen" options={{ headerShown: false}} component={RendingPage}/>
    </Stack.Navigator>
  );
}

export default TestStackNavigator;
