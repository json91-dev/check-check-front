import {Animated, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React, {useEffect, useRef, useState} from "react";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import {useQuery} from "react-query";
import {getUserCheckListBySubjectId} from "@query/useUserCheckList";
import {defaultQueryOptions} from "@query/options";
import useSectionState from "~/contexts/SectionStateContext/useSectionState";

interface SectionProps {
  sectionIndex: number,
  subjectId: number
}

const StartSection = React.memo(({ sectionIndex, subjectId}: SectionProps) => {
  const { data } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;
  const checkListSections = checkList.checkListSections
  const {sectionTitle, checkListElements} = checkListSections[sectionIndex]
  const {setSectionState} = useSectionState();

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
        <Text style={styles.leftViewTextBottom}>체크리스트 {checkListElements.length}개</Text>
      </View>

      <TouchableOpacity style={styles.touch} onPress={() => setSectionState('startActive', sectionIndex)}>
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
})

export default StartSection;
