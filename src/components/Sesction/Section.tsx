import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import StartSection from "@components/Sesction/Section/StartSection";
import StartActiveSection from "@components/Sesction/ActiveSection/StartActiveSection";
import DefaultSection from "@components/Sesction/Section/DefaultSection";
import DefaultActiveSection from "@components/Sesction/ActiveSection/DefaultActiveSection";
import CompleteSection from "@components/Sesction/Section/CompleteSection";
import CompleteActiveSection from "@components/Sesction/ActiveSection/CompleteActiveSection";

const Section = ({setShowModal} : {setShowModal: Function}) => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('default')

  switch (sectionState) {
    case 'start': {
      return (
        <StartSection setSectionState={setSectionState}/>
      )
    }

    case 'default': {
      return (
        <DefaultSection setSectionState={setSectionState}/>
      )
    }

    case 'complete': {
      return (
        <CompleteSection setSectionState={setSectionState}/>
      )
    }

    case 'startActive': {
      return (
        <StartActiveSection setShowModal={setShowModal} setSectionState={setSectionState}/>
      )
    }

    case 'defaultActive': {
      return (
        <DefaultActiveSection setSectionState={setSectionState}/>
      );
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
