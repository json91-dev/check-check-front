import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CheckListScreen from '../main/CheckListScreen/CheckListScreen';

const Stack = createNativeStackNavigator();

const CheckListStackNavigator = () => {


  return (
    <Stack.Navigator
      initialRouteName = "CheckListScreen"
    >
      <Stack.Screen name="CheckListScreen" options={{ headerShown: false}} component={CheckListScreen}/>
    </Stack.Navigator>
  );
}

export default CheckListStackNavigator;
