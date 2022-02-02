import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

const Section = () => {
  return (
    <View style={styles.sectionView}>
      <View style={styles.sectionViewInActiveView}>
        <View style={styles.sectionViewInActiveViewLeftView}>
          <Text style={styles.sectionViewInActiveViewLeftViewTextTop}>필요서류 준비하기</Text>
          <Text style={styles.sectionViewInActiveViewLeftViewTextBottom}>체크리스트 2개</Text>
        </View>

        <TouchableOpacity style={styles.sectionViewInActiveViewTouch}>
          <Text style={styles.sectionViewInActiveViewText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default Section;
