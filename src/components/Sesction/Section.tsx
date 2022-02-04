import React, {useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import StartSection from "@components/Sesction/StartSection/StartSection";
import StartActiveSection from "@components/Sesction/StartActiveSection/StartActiveSection";

const Section = () => {
  // start, startActive, default, defaultActive, complete, completeActive
  const [sectionState, setSectionState] = useState('start')


  switch (sectionState) {
    case 'start': {
      return (
        <View>
          <StartSection/>
          <StartActiveSection/>
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
