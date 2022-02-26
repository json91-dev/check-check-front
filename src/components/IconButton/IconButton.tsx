import {Image, TouchableOpacity, Text, View} from "react-native";
import React from 'react';
import styles from "./Styles";

interface IconButtonProps {
  source?: any;
  text?: string;
}

const IconButton = ({source, text} : IconButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch}>
        <Image style={styles.image} source={source}/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default IconButton;

