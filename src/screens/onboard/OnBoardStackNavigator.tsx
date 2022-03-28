import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import OnBoardPage1 from './OnBoardPage1/OnBoardPage1';
import OnBoardPage2 from './OnBoardPage2/OnBoardPage2';
import OnBoardPage3 from './OnBoardPage3/OnBoardPage3';
import OnBoardLogin from './OnBoardLogin/OnBoardLogin';
import {getStorageUser} from "@utils/hooks/useStorageUser";

const Stack = createNativeStackNavigator();

const OnBoardStackNavigator = ({ navigation }: {navigation: any}) => {

  useEffect(() => {
    // 맨 처음 시작시 LocalStorage의 유저 체크 후 있으면 Main으로 이동
    getStorageUser().then(user => {
      console.log(user)
      if (user) {
        navigation.replace('Main')
      }
    })
  }, [])


  return (
    <Stack.Navigator
      initialRouteName = "OnBoardPage1"
    >
      <Stack.Screen name="OnBoardPage1" options={{ headerShown: false}} component={OnBoardPage1}/>
      <Stack.Screen name="OnBoardPage2" options={{ headerShown: false}} component={OnBoardPage2}/>
      <Stack.Screen name="OnBoardPage3" options={{ headerShown: false}} component={OnBoardPage3}/>
      <Stack.Screen name="OnBoardLogin" options={{ headerShown: false}} component={OnBoardLogin}/>
    </Stack.Navigator>
);
}

export default OnBoardStackNavigator;
