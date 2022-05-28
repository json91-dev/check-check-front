import React, {useEffect} from 'react';
import Section from "@screens/main/CheckListScreen/Sesction/Section";
import {getUserCheckListBySubjectId} from "@query/useUserCheckList";
import {useQuery} from "react-query";
import {defaultQueryOptions} from "@query/options";
import useSectionState from "~/contexts/SectionStateContext/useSectionState";

const SectionManager = React.memo(({subjectId}: any) => {
  const { data: checkList, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkListSections = checkList? checkList.checkListSections: null;
  const {sectionStates, setSectionStates} = useSectionState()

  useEffect(() => {
    // 초기 상태 저장
    if (checkListSections) {
      console.log(checkListSections)
      const updatedSectionStates: any = []
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
