import React, {useEffect, useRef, useState} from 'react';
import {Animated} from "react-native";

interface FadeInAnimationProps {
  children: any,
  containerStyle: Object,
}

const FadeInAnimationView = ({children, containerStyle}: FadeInAnimationProps) => {
  const animatedValue = new Animated.Value(0);
  const sectionHeightRef = useRef(0);
  const [isAnimated, setIsAnimated] = useState(false)
  const height: number = sectionHeightRef.current
  useEffect(() => {
    Animated.timing(
      animatedValue,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }
    ).start(() => {
      // this.props.afterAnimationComplete();
    });
  }, [sectionHeightRef.current])

  const opacityAnimation: any = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });
  const heightAnimation: any = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height]
  })

  const find_dimesions = (layout: any) => {
    const { height } = layout;
    sectionHeightRef.current = height;

    if (!isAnimated) {
      setIsAnimated(true)
    }
  }


  const getHeight = () => {
    if (sectionHeightRef.current === 0) {
      return 'auto'
    } else {
      return heightAnimation
    }
  }

  const getOpacity = () => {
    if (sectionHeightRef.current === 0) {
      return 0
    } else {
      return 1
    }
  }

  return (
    <Animated.View onLayout={(event) => {
      find_dimesions(event.nativeEvent.layout)
    }} style={[containerStyle, {opacity: opacityAnimation}]}>
      {children}
    </Animated.View>
  )
};

export default FadeInAnimationView;
