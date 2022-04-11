import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import {useQuery} from "react-query";
import {getUserCheckListBySubjectId} from "@query/useUserCheckList";
import {defaultQueryOptions} from "@query/options";

interface SectionProps {
  setSectionState: Function,
  sectionIndex: number,
  subjectId: number
}

const CompleteSection = React.memo(({setSectionState,sectionIndex, subjectId }: SectionProps) => {
  const { data } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;
  const checkListSections = checkList.checkListSections
  const {sectionTitle, checkListElements} = checkListSections[sectionIndex]
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
})

export default CompleteSection;
