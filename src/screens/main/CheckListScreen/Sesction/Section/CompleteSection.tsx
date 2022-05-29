import {Image, Text, TouchableOpacity, View} from "react-native";
import { styles,stylesActive } from "./Styles";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import {useQuery} from "react-query";
import {getUserCheckListBySubjectId, useUserCheckPost} from "@query/useUserCheckList";
import {defaultQueryOptions} from "@query/options";
import useSectionState from "~/contexts/SectionStateContext/useSectionState";
import CheckBox from "@react-native-community/checkbox";
import SubElement from "@screens/main/CheckListScreen/Sesction/SubElement/SubElement";
import FadeInAnimationView from "@screens/main/CheckListScreen/Sesction/ActiveSection/FadeInAnimationView";
import useHelpModal from "~/contexts/HelpModalContext/useHelpModal";

interface SectionProps {
  sectionIndex: number,
  subjectId: number
}

const CompleteSection = React.memo(({sectionIndex, subjectId }: SectionProps) => {
  const { data } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;
  const checkListSections = checkList.checkListSections
  const {sectionTitle, checkListElements} = checkListSections[sectionIndex]
  const { userCheckMutation } : any = useUserCheckPost(subjectId);
  const { setHelpModal, openHelpModal } = useHelpModal()
  const [elementListOpened, setElementListOpened] = useState(false)

  /**
   * 체크박스의 Check를 변경시 mutation 호출
   * @param id 체크 번호
   * @param checked 현재 체크 상태
   */
  const onChangeCheck = useCallback((id: any, checked: any) => {
    userCheckMutation.mutate({
      id,
      checked
    })
  }, [checkListElements])

  /** 완료 버튼 눌렀을 때, List를 Open **/
  const onPressComplete = useCallback(() => {
    setElementListOpened(true)
  }, [elementListOpened])


  /** 체크 상태가 바뀔때마다 현재  **/
  useEffect(() => {
    const isAllElementChecked = checkListElements.findIndex((item: any) => item.checked === false) === -1
    if (isAllElementChecked) {
      setTimeout(() => {
        setElementListOpened(false)
      }, 300)
    } else {
      setElementListOpened(true)
    }
  }, [userCheckMutation.isSuccess])

  return (
    <View>
      {
        !elementListOpened
          ? (
            <View style={[styles.container, {borderColor: '#2D9929'}]}>
              <View style={styles.leftView}>
                <Text style={styles.leftViewTextTop}>{sectionTitle}</Text>
                <Text style={styles.leftViewTextBottom}>체크리스트 {checkListElements.length}개</Text>
              </View>

              <TouchableOpacity style={styles.touch} onPress={onPressComplete}>
                <Text style={[styles.touchText, {color: '#2D9929'}]}>완료</Text>
              </TouchableOpacity>

              <View style={styles.imageView}>
                <Image style={styles.imageViewImage} source={require('@assets/check-circle.png')} />
              </View>
            </View>
          )
          : (
            <FadeInAnimationView containerStyle={{...stylesActive.container, borderColor: '#2D9929'}}>
              <View style={stylesActive.leftView}>
                <Text style={stylesActive.leftViewTextTop}>{sectionTitle}</Text>
              </View>
              {checkListElements?.map((checkListElement: any) => {
                const {elementTitle, subElements, id, checked} = checkListElement
                return (
                  <View key={id + elementTitle} style={{width: '100%'}}>
                    <View style={stylesActive.elementView}>
                      <CheckBox
                        disabled={false}
                        value={checked? checked : false}
                        tintColors = {{ true: '#2658CB' , false: 'black' }}
                        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] , marginLeft: 4}}
                        onChange={(e) => {
                          onChangeCheck(id, checked)
                        }}
                      />
                      <Text style={stylesActive.elementViewText}>{elementTitle}</Text>
                      <TouchableOpacity style={stylesActive.elementViewTouch} onPress={() => {
                        setHelpModal(checkListElement)
                        openHelpModal()
                      }}>
                        <Image style={stylesActive.elementViewTouchImage} source={require('@assets/question_mark.png')}/>
                      </TouchableOpacity>
                    </View>
                    <View style={stylesActive.subElementRowView}>
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
              <View style={stylesActive.imageView}>
                <Image style={stylesActive.imageViewImage} source={require('@assets/check-circle.png')} />
              </View>
            </FadeInAnimationView>
          )
      }

    </View>
  )
})

export default CompleteSection;
