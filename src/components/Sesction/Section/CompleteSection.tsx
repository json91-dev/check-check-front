import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";

const CompleteSection = ({setSectionState}) => {
  return (
    <View style={[styles.container, {borderColor: '#2D9929'}]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>필요서류 준비하기</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 2개</Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress={setSectionState('completeActive')}>
        <Text style={[styles.touchText, {color: '#2D9929'}]}>완료</Text>
      </TouchableOpacity>

      <View style={styles.imageView}>
        <Image style={styles.imageViewImage} source={require('@assets/check-circle.png')} />
      </View>
    </View>
  )
}

export default CompleteSection;
