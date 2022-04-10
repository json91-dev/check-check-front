import React, {useEffect, useState, useCallback} from 'react';
import Section from "@screens/main/CheckListScreen/Sesction/Section";
import {getUserCheckListBySubjectId, useUserCheckList} from "@query/userCheckList/useUserCheckList";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import {useQuery} from "react-query";
import {defaultQueryOptions} from "@query/options";
import {getStorageUser} from "@utils/hooks/useStorageUser";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";

const SectionManager = React.memo(({subjectId, setShowModal}) => {
  const { data, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;

  const checkListSections = checkList? checkList.checkListSections: null;
  const [sectionState, setSectionState] = useState([])
  const [sectionChecked, setSectionChecked] = useState([])

  useEffect(() => {
    // 현재 섹션의 상태를 배열로 저장함.
    const updateSectionState: any = []
    if (checkListSections) {
      checkListSections.forEach((section, num) => {
        const index = section.checkListElements.findIndex(item => !item.checked)

        // 만약에 false가 하나라도 있는 경우
        if (index > -1) {
          if (updateSectionState.findIndex(item => item === 'start') === -1) {
            updateSectionState.push('start')
          } else {
            updateSectionState.push('default')
          }
        }

        // false가 아예 없는 경우
        else {
          updateSectionState.push('complete')
        }
      })
    }

    console.log(updateSectionState)

    // 섹션에 대한 체크 상태를 저장함.
    const updateSectionChecked: any = []
    if (checkListSections) {
      checkListSections.forEach((section) => {
        const sectionCheckedObject: any = {
          id: section.id,
          checked: [],
        };
        section.checkListElements.forEach((element) => {
          sectionCheckedObject.checked.push(element.checked)
        })

        updateSectionChecked.push(sectionCheckedObject)
      })
    }

    console.log(updateSectionChecked)

  }, [checkListSections])

  if (sectionState) {
    return (
      <>
        {
          checkListSections?.map((section: any, index: number) => {
            return (
              <Section
                key={section.id + section.sectionTitle + index}
                setShowModal={setShowModal}
                sectionData={section}
                sectionIndex={index}
                subjectId={subjectId}
                sectionState={sectionState[index]}
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
