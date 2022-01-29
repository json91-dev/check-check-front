import React, {useCallback, useEffect, useRef, useState} from 'react'
import {ActivityIndicator, Animated, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useCheckList} from "@query/checklist/useCheckList";
import Loading from "@components/Loading/Loading"
import styles from './Styles';

const totalIndex = 7;
const currentIndex = 0;


const CheckListScreen = () => {
  // const {checkList, status, error} = useCheckList('전세계약!!');
  //
  // if (!checkList || status!== 'success') {
  //   return <Loading text="필요한 체크리스트를 불러오고 있어요..."/>
  // }
  //
  // const { title, subTitle } = checkList;

  const [count, setCount] = useState(0);
  const countInterval = useRef<NodeJS.Timer | null>(null);

  const loaderValue = useRef(new Animated.Value(0)).current;
  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });


  useEffect(() => {
    countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
    return () => {
      clearInterval(countInterval.current as NodeJS.Timeout); //when user exits, clear this interval.
    };
  }, []);




  const load = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: count, //final value
      duration: 1000, //update value in 500 milliseconds
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    load(count)
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval.current as NodeJS.Timeout);
    }
  }, [count]);


  return (
    <View style={styles.container}>
      <View style={styles.topNavigation}>
        <TouchableOpacity style={styles.topNavigationTouch}>
          <Image style={styles.topNavigationImg} source={require('@assets/left-arrow.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.topNavigationTouch}>
          <Image style={styles.topNavigationImg} source={require('@assets/magnifying-glass.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width}}/>
      </View>


      <Text>하이</Text>
    </View>
  )
};

export default CheckListScreen;
