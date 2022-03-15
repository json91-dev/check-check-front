import React, {useEffect, useState, useCallback} from 'react';
import StartSection from "@components/Sesction/Section/StartSection";
import StartActiveSection from "@components/Sesction/ActiveSection/StartActiveSection";
import DefaultSection from "@components/Sesction/Section/DefaultSection";
import DefaultActiveSection from "@components/Sesction/ActiveSection/DefaultActiveSection";
import CompleteSection from "@components/Sesction/Section/CompleteSection";
import CompleteActiveSection from "@components/Sesction/ActiveSection/CompleteActiveSection";

interface SectionProps {
  setShowModal: Function,
  sectionData: any,
  sectionIndex: number,
}

const Section = ({setShowModal, sectionData, sectionIndex}: SectionProps ) => {
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
        <StartActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      )
    }

    case 'defaultActive': {
      return (
        <DefaultActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      );
    }

    case 'completeActive': {
      return (
        <CompleteActiveSection setSectionState={onPressSectionState} sectionData={sectionData} sectionIndex={sectionIndex} setShowModal={setShowModal}/>
      );
    }

    default: {
      return null;
    }
  }


}


export default Section;
