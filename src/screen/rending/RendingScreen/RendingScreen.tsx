import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from "./Styles";
import IconButton from "../../../components/IconButton/IconButton";

const RendingScreen = ({ navigation }: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <IconButton source={require('../../../assets/monthly_pay.png')} text={'월세 계약'}/>
        <IconButton source={require('../../../assets/yearly_pay.png')} text={'전세 계약'}/>
      </View>
      <View style={styles.row}>
        <IconButton source={require('../../../assets/moving_truck.png')} text={'이사'}/>
        <IconButton source={require('../../../assets/buy_house.png')} text={'집 구매'}/>
      </View>
      <View style={styles.row}>
        <IconButton source={require('../../../assets/search_house.png')} text={'집 찾기'}/>
        <IconButton source={require('../../../assets/cart.png')} text={'TBD?'}/>
      </View>
    </SafeAreaView>
  )
};

export default RendingScreen;

