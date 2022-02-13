import {Image, TouchableOpacity, Text, ImageSourcePropType} from "react-native";
import React from 'react';
import styles from "./Styles";

interface IconButtonProps {
  source?: any;
  text?: string;
}

const IconButton = ({source, text} : IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={source}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

export default IconButton;

