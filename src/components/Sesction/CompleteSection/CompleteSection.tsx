import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";

const CompleteSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>필요서류 준비하기</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 2개</Text>
      </View>

      <TouchableOpacity style={styles.touch}>
        <Text style={styles.touchText}>시작하기</Text>
      </TouchableOpacity>

      <View style={styles.imageView}>
        <Image style={styles.imageViewImage} source={require('@assets/circle_blue.png')} />
        <View style={styles.imageViewInnerView}>
          <Text style={styles.imageViewInnerViewText}>1</Text>
        </View>
      </View>
    </View>
  )
}

export default CompleteSection;
