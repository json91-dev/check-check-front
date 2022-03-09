import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import SubElement from "@components/Sesction/SubElement/SubElement";
import FadeInAnimationView from "@components/Sesction/ActiveSection/FadeInAnimationView";
import {CheckListSectionsInterface} from "@query/queryInterface";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionsInterface,
  sectionIndex: number,
}

const CompleteActiveSection = ({setSectionState, setShowModal, sectionData, sectionIndex}: SectionProps) => {
  return (
    <FadeInAnimationView containerStyle={{...styles.container, borderColor: '#2D9929'}}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>필요서류 준비하기</Text>
      </View>

      <View style={styles.elementView}>
        <CheckBox
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}
          tintColors = {{ true: 'blue' , false: 'gray' }}
          value={true}
        />
        <Text style={styles.elementViewText}>주민등록 초본 또는 등본 발급</Text>
        <TouchableOpacity style={styles.elementViewTouch}>
          <Image style={styles.elementViewTouchImage} source={require('@assets/question_mark.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.subElementRowView}>
        <SubElement/>
        <SubElement/>
      </View>

      <View style={styles.elementView}>
        <CheckBox
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}
          tintColors = {{ true: 'blue' , false: 'gray' }}
          value={true}
        />
        <Text style={styles.elementViewText}>주민등록 초본 또는 등본 발급</Text>
        <TouchableOpacity style={styles.elementViewTouch}>
          <Image style={styles.elementViewTouchImage} source={require('@assets/question_mark.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.subElementRowView}>
        <SubElement/>
        <SubElement/>
      </View>

      <View style={styles.imageView}>
        <Image style={styles.imageViewImage} source={require('@assets/check-circle.png')} />
      </View>
    </FadeInAnimationView>
  )
}

export default CompleteActiveSection;
