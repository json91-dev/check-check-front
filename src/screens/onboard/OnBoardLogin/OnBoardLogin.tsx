import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import useGoogleLogin from "@hooks/login/useGoogleLogin";
import useKakaoLogin from "@hooks/login/useKakaoLogin";

const OnBoardLogin = ({navigation}: {navigation: any}) => {
  const {onGoogleButtonPress}  = useGoogleLogin(navigation)
  const {onKakaoButtonPress} = useKakaoLogin(navigation)

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

