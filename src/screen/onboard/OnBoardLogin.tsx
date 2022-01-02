import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const OnBoardLogin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomImageView}>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../assets/apple_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch}>
          <Image style={styles.bottomImage} source={require('../../assets/kakao_login.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageTouch}>
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
  },

  bottomImageView : {
    position: 'absolute',
    bottom: '6%',
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
