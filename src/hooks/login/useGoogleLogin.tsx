import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import { setStorageUser} from "@hooks/useStorageUser";

const useGoogleLogin = (navigation) => {
  const googleAuthChangeCallback = async (user: any) => {
    try {
      if (user) {
        const { email } = user
        const userInfo = {
          email,
          provider: 'google'
        }
        await setStorageUser(userInfo)
        navigation.replace('Main')
      } else {
        console.log('로그아웃');
      }
    } catch (e) {
      console.error(e)
    }
  }

  /** Google **/
  useEffect(() => {
    // 구글 로그인 환경 설정
    GoogleSignin.configure({
      webClientId: '758583185214-vihmf7rtpffbe04i22dsa06fda16ks7v.apps.googleusercontent.com',
      offlineAccess: true,
    });

    // Firebase auth
    auth().onAuthStateChanged(googleAuthChangeCallback);
  }, []);

  /** Sign out when screen changed **/
  useEffect(() => {
    return () => {
      auth().signOut().then(() => {}) // Google Sign out
    }
  }, [])

  /**
   *
   */
  const onGoogleButtonPress = async () => {
    try {
      // Step 1: GoogleSignin 모듈을 통해 토큰을 얻어옴. (로그인 화면 수행)
      const { idToken } = await GoogleSignin.signIn();

      // Step 2: Firebase auth를 통해 token 요청후 Resource 권한 획득
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Step 3: 해당 권한을 이용하여,,,?
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
  };
  return {onGoogleButtonPress}
};

export default useGoogleLogin;

