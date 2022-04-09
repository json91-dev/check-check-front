import React, {useEffect, useState} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {KakaoOAuthToken, login, logout} from '@react-native-seoul/kakao-login';
import styles from './Styles';
import {getAccessTokenApi, setStorageUser} from "@utils/hooks/useStorageUser";

const OnBoardLogin = ({navigation}: {navigation: any}) => {
  const [loggedInGoogle, setLoggedInGoogle] = useState(false);

  const googleAuthChangeCallback = async (user: any) => {
    try {
      if (user) {
        // setLoggedInGoogle(true);
        // const {email, displayName,  emailVerified, isAnonymous, metadata} = user
        const { email } = user

        // 서버로부터 유저 토큰 정보 얻기
        // const response = await getAccessTokenApi(email, 'google')
        // const { accessToken } = response.data;

        // AsyncStorage 유저 저장
        const userInfo = {
          // token: accessToken,
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
    setLoggedInGoogle(false);
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

  const onGoogleButtonPress = async () => {
    try {
      // Step 1: GoogleSignin 모듈을 통해 토큰을 얻어옴. (로그인 화면 수행)
      const { idToken } = await GoogleSignin.signIn();

      // Step 2: Firebase auth를 통해 token 요청후 Resource 권한 획득
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Step 3: 해당 권한을 이용하여,,,?
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      // console.log(e);
    }
  };

  const onKakaoButtonPress = async () => {
    const token: KakaoOAuthToken = await login();
    Alert.alert('카카오 로그인', '로그인 성공');
    logout();

    return;
  };

  /** Kakao **/



  return (
    <View style={styles.container}>
      <View style={styles.bottomImageView}>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../../assets/apple_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch} onPress={onKakaoButtonPress}>
          <Image style={styles.bottomImage} source={require('../../../assets/kakao_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch} onPress={onGoogleButtonPress}>
          <Image style={styles.bottomImage} source={require('../../../assets/google_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../../assets/no_login.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default OnBoardLogin;

