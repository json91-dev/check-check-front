import React, {useEffect} from 'react';
import {KakaoOAuthToken, login, logout, getProfile} from "@react-native-seoul/kakao-login";
import {setStorageUser} from "@hooks/useStorageUser";
const useKakaoLogin = (navigation) => {
  const signInWithKakao = async () => {
    try {
      const token: KakaoOAuthToken = await login();
      const profile: any = await getProfile()
      const email = profile.email;
      const userInfo = {
        email,
        provider: 'kakao'
      }
      await setStorageUser(userInfo)
      navigation.replace('Main')
      return;
    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    return () => {
      logout().then();
    }
  },[])

  return {signInWithKakao}
};

export default useKakaoLogin;

