import {Image, Text, View} from "react-native";
import React from "react";
import styles from './Styles';

const SubElement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.leftViewImageView}>
          <Image style={styles.leftViewImageViewImage} source={require('@assets/building.png')}/>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.rightViewTitleText}>받을 수 있는 곳</Text>
        <Text style={styles.rightViewSubTitleText}>온라인 민원 24 {"\n"}동사무소 구청</Text>
      </View>
    </View>
  )
}

export default SubElement;
