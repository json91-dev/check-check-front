import React, {useEffect, useState, useCallback} from 'react';
import StartSection from "@screens/main/CheckListScreen/Sesction/Section/StartSection";
import StartActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/StartActiveSection";
import DefaultSection from "@screens/main/CheckListScreen/Sesction/Section/DefaultSection";
import DefaultActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/DefaultActiveSection";
import CompleteSection from "@screens/main/CheckListScreen/Sesction/Section/CompleteSection";
import CompleteActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/CompleteActiveSection";

interface SectionProps {
  setShowModal: Function,
  sectionData: any,
  sectionIndex: number,
  subjectId: number
}

const Section = ({setShowModal, sectionData, sectionIndex, subjectId}: SectionProps ) => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('complete')

  const onPressSectionState = useCallback((state) => () => {
    setSectionState(state)
  }, [sectionState])

  useEffect(() => {
    setSectionState('start')
  }, [])

  switch (sectionState) {
    case 'start': {
      return (
        <StartSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      )
    }

    case 'default': {
      return (
        <DefaultSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      )
    }

    case 'complete': {
      return (
        <CompleteSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      )
    }

    case 'startActive': {
      return (
        <StartActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal} subjectId={subjectId}/>
      )
    }

    case 'defaultActive': {
      return (
        <DefaultActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal} subjectId={subjectId} />
      );
    }

    case 'completeActive': {
      return (
        <CompleteActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal} subjectId={subjectId} />
      );
    }

    default: {
      return null;
    }
  }


}


export default Section;
