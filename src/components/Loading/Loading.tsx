import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import styles from './Styles';

interface LoadingProps{
  text?: string;
}

const Loading = ({text} : LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30}/>
      {text? <Text style={styles.text}>{text}</Text> : null}
    </View>
  )
};

export default Loading
