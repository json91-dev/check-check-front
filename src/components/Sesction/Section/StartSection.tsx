import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React, {useEffect, useRef, useState} from "react";
import {CheckListSectionInterface} from "@query/queryInterface";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionInterface,
  sectionIndex: number,
}

const StartSection = ({setSectionState, setShowModal, sectionData, sectionIndex}: SectionProps) => {
  const {sectionTitle, checkListElements} = sectionData

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 {checkListElements.length}개</Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress={setSectionState('startActive')}>
        <Text style={styles.touchText}>시작하기</Text>
      </TouchableOpacity>

      <View style={styles.imageView}>
        <Image style={styles.imageViewImage} source={require('@assets/circle_blue.png')} />
        <View style={styles.imageViewInnerView}>
          <Text style={[styles.imageViewInnerViewText, {color: '#568ADD'}]}>{sectionIndex + 1}</Text>
        </View>
      </View>
    </Animated.View>
  )
}

export default StartSection;
