import {Image, Text, View} from "react-native";
import React from "react";
import styles from './Styles';
import {CheckListSectionInterface, SubElementInterface} from "@utils/interfaces/userCheckList";

interface SubElementProps {
  subElement: SubElementInterface,
}

const SubElement = ({subElement}: SubElementProps) => {
  const {iconUrl, subElementTitle, subElementDescription} = subElement
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.leftViewImageView}>
          <Image style={styles.leftViewImageViewImage} source={require('@assets/building.png')}/>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.rightViewTitleText}>{subElementTitle}</Text>
        <Text style={styles.rightViewSubTitleText}>{subElementDescription}</Text>
      </View>
    </View>
  )
}

export default SubElement;
