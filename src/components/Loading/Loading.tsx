import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import Styles from './Styles';

interface LoadingProps{
  text?: string;
}

const Loading = ({text} : LoadingProps) => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator/>
      {text? <Text>{text}</Text> : null}
    </View>
  )
}
