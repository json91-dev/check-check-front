import React, {useEffect, useState, useCallback} from 'react';
import StartSection from "@screens/main/CheckListScreen/Sesction/Section/StartSection";
import StartActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/StartActiveSection";
import DefaultSection from "@screens/main/CheckListScreen/Sesction/Section/DefaultSection";
import DefaultActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/DefaultActiveSection";
import CompleteSection from "@screens/main/CheckListScreen/Sesction/Section/CompleteSection";
import CompleteActiveSection from "@screens/main/CheckListScreen/Sesction/ActiveSection/CompleteActiveSection";

interface SectionProps {
  sectionIndex: number,
  subjectId: number
}

const Section = ({ sectionIndex, subjectId}: SectionProps ) => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('startActive')

  const onPressSectionState = useCallback((state) => () => {
    setSectionState(sectionState)
  }, [sectionState])

  useEffect(() => {
    // setSectionState('startActive')
  }, [])

  switch (sectionState) {
    case 'start': {
      return (
        <StartSection sectionIndex={sectionIndex}  subjectId={subjectId} setSectionState={setSectionState}/>
      )
    }

    case 'default': {
      return (
        <DefaultSection sectionIndex={sectionIndex}  subjectId={subjectId} setSectionState={setSectionState}/>
      )
    }

    case 'complete': {
      return (
        <CompleteSection sectionIndex={sectionIndex}  subjectId={subjectId} setSectionState={setSectionState}/>
      )
    }

    case 'startActive': {
      return (
        <StartActiveSection  sectionIndex={sectionIndex} subjectId={subjectId} />
      )
    }

    case 'defaultActive': {
      return (
        <DefaultActiveSection sectionIndex={sectionIndex}  subjectId={subjectId} />
      );
    }

    case 'completeActive': {
      return (
        <CompleteActiveSection sectionIndex={sectionIndex}  subjectId={subjectId} />
      );
    }

    default: {
      return null;
    }
  }


}


export default Section;
