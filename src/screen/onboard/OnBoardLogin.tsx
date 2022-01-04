import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {KakaoOAuthToken, login, logout} from '@react-native-seoul/kakao-login';

const OnBoardLogin = () => {
  const [loggedInGoogle, setLoggedInGoogle] = useState(false);

  /** Google **/
  useEffect(() => {
    setLoggedInGoogle(false);

    GoogleSignin.configure({
      webClientId: '758583185214-vihmf7rtpffbe04i22dsa06fda16ks7v.apps.googleusercontent.com',
      offlineAccess: true,
    });

    auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedInGoogle(true);
        console.log('로그인 성공');
        Alert.alert('구글 로그인', '로그인 성공');
        auth().signOut();
      } else {
        console.log('로그아웃');
        setLoggedInGoogle(false);
      }
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      console.log(idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e);
    }
  };

  const onKakaoButtonPress = async () => {
    const token: KakaoOAuthToken = await login();
    console.log(JSON.stringify(token));
    Alert.alert('카카오 로그인', '로그인 성공');
    logout()
  };

  /** Kakao **/



  return (
    <View style={styles.container}>
      <View style={styles.bottomImageView}>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../assets/apple_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch} onPress={onKakaoButtonPress}>
          <Image style={styles.bottomImage} source={require('../../assets/kakao_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch} onPress={onGoogleButtonPress}>
          <Image style={styles.bottomImage} source={require('../../assets/google_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../assets/no_login.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default OnBoardLogin;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  bottomImageView : {
    position: 'absolute',
    bottom: '3%',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomImageTouch: {
    height: '21%',
    width: '90%',
    marginBottom: '2%'
  },

  bottomImage : {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});
