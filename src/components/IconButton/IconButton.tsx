import {Image, TouchableOpacity, Text, View} from "react-native";
import React, {useCallback} from 'react';
import styles from "./Styles";

interface IconButtonProps {
  source?: any;
  subject: {subjectTitle: string, subjectId: string, imageUrl: string};
  index: number;
  setSelectedSubjectTitle: Function;
  setSelectedSubjectIndex: Function;
  setSelectedSubjectId: Function;
  selectedSubjectIndex: number;
}

const IconButton = ({source, subject, index, setSelectedSubjectTitle, setSelectedSubjectIndex, setSelectedSubjectId, selectedSubjectIndex} : IconButtonProps) => {
  const onPressTouch = useCallback(() => {
    setSelectedSubjectIndex(index);
    setSelectedSubjectTitle(subject.subjectTitle);
    setSelectedSubjectId(subject.subjectId)
  }, [subject.subjectId])

  const getBorderColor = useCallback(() => {
    // 선택된 index 번호와 현재 item 의 index 비교후 같을때 border 색상을 반환
    if (selectedSubjectIndex === index) {
      return {
        borderColor: '#4574D5'
      }
    }
  }, [selectedSubjectIndex, index])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.touch, getBorderColor()]} onPress={onPressTouch}>
        <Image style={styles.image} source={source}/>
        <Text style={styles.subjectTitle}>{subject.subjectTitle}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default IconButton;

