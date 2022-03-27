import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import SubElement from "@components/Sesction/SubElement/SubElement";
import FadeInAnimationView from "@components/Sesction/ActiveSection/FadeInAnimationView";
import {CheckListSectionInterface} from "@utils/interfaces/checkList";
import useHelpModal from "~/contexts/HelpModalContext/useHelpModal";

interface SectionProps {
  setSectionState: Function,
  setShowModal: Function,
  sectionData: CheckListSectionInterface,
  sectionIndex: number,
}

const CompleteActiveSection = ({setSectionState, setShowModal, sectionData, sectionIndex}: SectionProps) => {
  const {sectionTitle, checkListElements} = sectionData;
  const { setHelpModal, openHelpModal } = useHelpModal()

  return (
    <FadeInAnimationView containerStyle={{...styles.container, borderColor: '#2D9929'}}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
      </View>

      {checkListElements.map(checkListElement => {
        const {elementName, subElements, id} = checkListElement
        return (
          <View key={id + elementName} style={{width: '100%'}}>
            <View style={styles.elementView}>
              <CheckBox style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}/>
              <Text style={styles.elementViewText}>{elementName}</Text>
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
