import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import React, {useCallback, useEffect, useRef} from "react";
import CheckBox from "@react-native-community/checkbox";
import SubElement from "@screens/main/CheckListScreen/Sesction/SubElement/SubElement";
import FadeInAnimationView from "@screens/main/CheckListScreen/Sesction/ActiveSection/FadeInAnimationView";
import useHelpModal from "~/contexts/HelpModalContext/useHelpModal";
import {useQuery} from "react-query";
import {getUserCheckListBySubjectId, useUserCheckPost} from "@query/useUserCheckList";
import {defaultQueryOptions} from "@query/options";
import useSectionState from "~/contexts/SectionStateContext/useSectionState";

interface SectionProps {
  sectionIndex: number,
  subjectId: number,
}

const CompleteActiveSection = React.memo(({sectionIndex, subjectId}: SectionProps) => {
  const { data, dataUpdatedAt } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const { userCheckMutation } = useUserCheckPost(subjectId);
  const { sectionTitle, checkListElements } = data.checkListSections[sectionIndex]
  const { setHelpModal, openHelpModal } = useHelpModal()
  const { setSectionState } = useSectionState()
  const isFirstRef = useRef(true)

  /** 체크박스의 Check를 변경시 mutation 호출 **/
  const onChangeCheck = (id: any, checked: any) => {
    userCheckMutation.mutate({
      id,
      checked
    })
  }

  /** 모두 체크가 되었다면 Active로 전환 **/
  useEffect(() => {
    // const index = checkListElements.findIndex((item: any) => item.checked === false)
    // if (index === -1) {
    //   setSectionState('complete', sectionIndex);
    // }
  },[data])

  return (
    <FadeInAnimationView containerStyle={{...styles.container, borderColor: '#2D9929'}}>
      <View style={styles.leftView}>
        <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
      </View>

      {checkListElements?.map((checkListElement: any) => {
        const {elementTitle, subElements, id, checked} = checkListElement
        return (
          <View key={id + elementTitle} style={{width: '100%'}}>
            <View style={styles.elementView}>
              <CheckBox
                disabled={false}
                value={checked? checked : false}
                tintColors = {{ true: '#2658CB' , false: 'black' }}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}
                onChange={(e) => onChangeCheck(id, checked)}
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
              {subElements.map((subElement: any) => {
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
})

export default CompleteActiveSection;
