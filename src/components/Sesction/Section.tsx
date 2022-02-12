import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import StartSection from "@components/Sesction/Section/StartSection/StartSection";
import StartActiveSection from "@components/Sesction/ActiveSection/StartActiveSection/StartActiveSection";
import DefaultSection from "@components/Sesction/Section/DefaultSection/DefaultSection";
import DefaultActiveSection from "@components/Sesction/ActiveSection/DefaultActiveSection/DefaultActiveSection";
import CompleteSection from "@components/Sesction/Section/CompleteSection/CompleteSection";
import CompleteActiveSection from "@components/Sesction/ActiveSection/CompleteActiveSection/CompleteActiveSection";

const Section = () => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('start')


  switch (sectionState) {
    case 'start': {
      return (
        <View>
          <StartSection/>
          <StartActiveSection/>
          <DefaultSection/>
          <DefaultActiveSection/>
          <CompleteSection/>
          <CompleteActiveSection />
        </View>
      )
    }
    case 'startActive': {
      return (
        <StartActiveSection/>
      )
    }

    case 'default': {
      return null;
    }

    case 'defaultActive': {
      return null;
    }

    case 'complete': {
      return null;
    }

    case 'completeActive': {
      return null;
    }

    default: {
      return null;
    }
  }


}


export default Section;
