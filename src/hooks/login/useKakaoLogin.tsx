import React from 'react';
import {KakaoOAuthToken, login, logout} from "@react-native-seoul/kakao-login";
const useKakaoLogin = (navigation) => {
  const onKakaoButtonPress = async () => {
    const token: KakaoOAuthToken = await login();
    // Alert.alert('카카오 로그인', '로그인 성공');
    logout().then();
    return;
  };

  return {onKakaoButtonPress}
};

export default useKakaoLogin;

