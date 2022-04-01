import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React, {useCallback} from "react";
import CheckBox from "@react-native-community/checkbox";
import SubElement from "@screens/main/CheckListScreen/Sesction/SubElement/SubElement";
import FadeInAnimationView from "@screens/main/CheckListScreen/Sesction/ActiveSection/FadeInAnimationView";
import {CheckListSectionInterface} from "@utils/interfaces/userCheckList";
import useHelpModal from "~/contexts/HelpModalContext/useHelpModal";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionInterface,
  sectionIndex: number,
  subjectId: number,
}

const CompleteActiveSection = ({setSectionState, setShowModal, sectionData, sectionIndex, subjectId}: SectionProps) => {
  const {sectionTitle, checkListElements} = sectionData;
  const { setHelpModal, openHelpModal } = useHelpModal()

  const onChangeCheck = useCallback( () => {

  }, [])

  return (
    <FadeInAnimationView containerStyle={{...styles.container, borderColor: '#2D9929'}}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
      </View>

      {checkListElements?.map(checkListElement => {
        const {elementTitle, subElements, id, checked} = checkListElement
        return (
          <View key={id + elementTitle} style={{width: '100%'}}>
            <View style={styles.elementView}>
              <CheckBox
                disabled={false}
                value={checked? checked : false}
                tintColors = {{ true: '#2658CB' , false: 'black' }}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}
                onChange={onChangeCheck}
              />
              <Text style={styles.elementViewText}>{elementTitle}</Text>
              <TouchableOpacity style={styles.elementViewTouch} onPress={() => {
                setHelpModal(checkListElement)
                openHelpModal()
              }}>
                <Image style={styles.elementViewTouchImage} source={require('@assets/question_mark.png')}/>
              </TouchableOpacity>
            </View>

            <View style={styles.subElementRowView}>
              {subElements.map(subElement => {
                const {id, subElementTitle} = subElement
                return (
                  <SubElement key={id + subElementTitle} subElement={subElement}/>
                )
              })}
            </View>
          </View>
        )
      })}

      <View style={styles.imageView}>
        <Image style={styles.imageViewImage} source={require('@assets/check-circle.png')} />
      </View>
    </FadeInAnimationView>
  )
}

export default CompleteActiveSection;
