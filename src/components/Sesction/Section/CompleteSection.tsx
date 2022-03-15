import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";
import {CheckListSectionInterface} from "@query/queryInterface";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionInterface,
  sectionIndex: number,
}

const CompleteSection = ({setSectionState, setShowModal, sectionData, sectionIndex}: SectionProps) => {
  const {sectionTitle, checkListElements} = sectionData
  return (
    <View style={[styles.container, {borderColor: '#2D9929'}]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 {checkListElements.length}개</Text>
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
