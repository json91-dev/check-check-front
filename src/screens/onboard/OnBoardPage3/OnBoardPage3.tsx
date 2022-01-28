import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';

const OnBoardPage3 = ({ navigation }: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bottomImageView}>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoardLogin')}>
          <Image style={styles.bottomImage} source={require('../../../assets/primary_button_active_56.png')}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
};

export default OnBoardPage3;

