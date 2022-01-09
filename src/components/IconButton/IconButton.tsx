import {Image, TouchableOpacity, Text} from "react-native";
import React from 'react';
import {styles} from "./Styles";

const IconButton = ({source, text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={source}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

export default IconButton;

