import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";
import {CheckListSectionInterface} from "@utils/interfaces/userCheckList";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionInterface,
  sectionIndex: number,
}

const DefaultSection = ({setSectionState, setShowModal, sectionData, sectionIndex}: SectionProps) => {
  const {sectionTitle, checkListElements} = sectionData
  return (
    <View style={[styles.container, {borderColor: '#BABBBA'}]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 {checkListElements.length}개</Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress={() => setSectionState('defaultActive')}>
        <Text style={[styles.touchText, {color: '#4B4D4B'}]}>항목보기</Text>
      </TouchableOpacity>

      <View style={[styles.imageView]}>
        <Image style={styles.imageViewImage} source={require('@assets/circle_gray.png')} />
        <View style={styles.imageViewInnerView}>
          <Text style={[styles.imageViewInnerViewText, {color: '#BABBBA'}]}>{sectionIndex + 1}</Text>
        </View>
      </View>
    </View>
  )
}

export default DefaultSection;
