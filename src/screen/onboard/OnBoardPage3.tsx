import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const OnBoardPage3 = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>

      <View style={styles.bottomImageView}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoardLogin')}>
          <Image style={styles.bottomImage} source={require('../../assets/primary_button_active_56.png')}/>
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default OnBoardPage3;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  bottomImageView : {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',

  },

  bottomImage : {
    resizeMode: 'contain',
    height: '100%'
  }
});
