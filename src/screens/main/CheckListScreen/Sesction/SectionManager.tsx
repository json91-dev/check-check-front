import React, {useEffect, useState, useCallback, useRef} from 'react';
import Section from "@screens/main/CheckListScreen/Sesction/Section";
import {getUserCheckListBySubjectId, useUserCheckList} from "@query/useUserCheckList";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import {useQuery} from "react-query";
import {defaultQueryOptions} from "@query/options";
import {getStorageUser} from "@utils/hooks/useStorageUser";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";

const SectionManager = React.memo(({subjectId, setShowModal}: any) => {
  const { data, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;
  const checkListSections = checkList? checkList.checkListSections: null;
  const [sectionStates, setSectionStates] = useState([])
  const [sectionChecked, setSectionChecked] = useState([])
  const sectionStateRef: any = useRef([]);

  useEffect(() => {
    // 초기 상태 저장
    if (checkListSections) {
      const updatedSectionStates: any = []
      console.log(checkListSections)
      checkListSections.forEach((section, num) => {
        const index = section.checkListElements.findIndex(item => !item.checked)
        if (index > -1) {
          const index = updatedSectionStates.findIndex((item : string) => item === 'start')
          if (index === -1) {
            updatedSectionStates.push('start')
          } else {
            updatedSectionStates.push('default')
          }
        } else {
          updatedSectionStates.push('complete')
        }
      })

      console.log(updatedSectionStates)
      setSectionStates(updatedSectionStates)
    } else {

    }

    // // 섹션에 대한 체크 상태를 저장함.
    // const updateSectionChecked: any = []
    // if (checkListSections) {
    //   checkListSections.forEach((section) => {
    //     const sectionCheckedObject: any = {
    //       id: section.id,
    //       checked: [],
    //     };
    //     section.checkListElements.forEach((element) => {
    //       sectionCheckedObject.checked.push(element.checked)
    //     })
    //
    //     updateSectionChecked.push(sectionCheckedObject)
    //   })
    // }
  }, [checkListSections])

  if (sectionStates.length > 0) {
    return (
      <>
        {
          checkListSections?.map((section: any, index: number) => {
            return (
              <Section
                key={section.id + section.sectionTitle + index}
                sectionIndex={index}
                subjectId={subjectId}
                sectionState={sectionStates[index]}
              />
            )
          })
        }
      </>
    )
  } else {
    return null;
  }
})


export default SectionManager;
