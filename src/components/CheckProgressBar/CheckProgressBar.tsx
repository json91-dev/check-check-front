import {Animated, StyleSheet, View} from "react-native";
import React, {useCallback, useEffect, useRef} from "react";
import styles from './Styles';

const CheckProgressBar = ({current, total}: any) => {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });


  // 0~100 사이로 값을 입력받고 해당 값에 대한 애니메이션 수행
  const loadAnimation = useCallback((count: number) => {
    Animated.timing(loaderValue, {
      toValue: count, // final value
      duration: 500, // update value in 500 milliseconds
      useNativeDriver: false,
    }).start();
  }, [current, total]);

  useEffect(() => {
    const segment = 100 / total;

    loadAnimation(segment * current)

  }, [current, total])

  return (
    <View style={styles.progressBar}>
      <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#3070D5", width}]}/>
    </View>
  )
}

export default CheckProgressBar
