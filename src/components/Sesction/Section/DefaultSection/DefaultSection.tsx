import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../Styles";
import React from "react";

const DefaultSection = () => {
  return (
    <View style={[styles.container, {borderColor: '#BABBBA'}]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>필요서류 준비하기</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 2개</Text>
      </View>

      <TouchableOpacity style={styles.touch}>
        <Text style={[styles.touchText, {color: '#4B4D4B'}]}>항목보기</Text>
      </TouchableOpacity>

      <View style={[styles.imageView]}>
        <Image style={styles.imageViewImage} source={require('@assets/circle_gray.png')} />
        <View style={styles.imageViewInnerView}>
          <Text style={[styles.imageViewInnerViewText, {color: '#BABBBA'}]}>1</Text>
        </View>
      </View>
    </View>
  )
}

export default DefaultSection;
