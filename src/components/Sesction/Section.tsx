import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import StartSection from "@components/Sesction/Section/StartSection/StartSection";
import StartActiveSection from "@components/Sesction/ActiveSection/StartActiveSection/StartActiveSection";
import DefaultSection from "@components/Sesction/Section/DefaultSection/DefaultSection";
import DefaultActiveSection from "@components/Sesction/ActiveSection/DefaultActiveSection/DefaultActiveSection";
import CompleteSection from "@components/Sesction/Section/CompleteSection/CompleteSection";
import CompleteActiveSection from "@components/Sesction/ActiveSection/CompleteActiveSection/CompleteActiveSection";

const Section = ({setShowModal} : {setShowModal: Function}) => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('start')

  switch (sectionState) {
    case 'start': {
      return (
        <StartSection setSectionState={setSectionState}/>
      )
    }
    case 'startActive': {
      return (
        <StartActiveSection setShowModal={setShowModal} setSectionState={setSectionState}/>
      )
    }

    case 'default': {
      return (
        <DefaultSection setSectionState={setSectionState}/>
      )
    }

    case 'defaultActive': {
      return (
        <DefaultActiveSection setSectionState={setSectionState}/>
      );
    }

    case 'complete': {
      return (
        <CompleteSection setSectionState={setSectionState}/>
      )
    }

    case 'completeActive': {
      return (
        <CompleteActiveSection setSectionState={setSectionState}/>
      );
    }

    default: {
      return null;
    }
  }


}


export default Section;
