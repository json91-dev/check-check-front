import React, {useCallback, useEffect, useRef, useState} from 'react'
import {ActivityIndicator, Animated, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useCheckList} from "@query/checklist/useCheckList";
import Loading from "@components/Loading/Loading"
import CheckBox from "@react-native-community/checkbox";
import styles from './Styles';
import Section from "@components/Sesction/Section";

const totalIndex = 7;
const currentIndex = 0;

const CheckListScreen = () => {
  const {checkList, status, error} = useCheckList('전세 계약!!');
  const { title, subTitle } = checkList;
  const [count, setCount] = useState(0);
  const countInterval = useRef<NodeJS.Timer | null>(null);
  const [checkBoxValues, setCheckBoxValues] = useState([false, false, false, false])

  const loaderValue = useRef(new Animated.Value(0)).current;
  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });

  useEffect(() => {
    // countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
    // return () => {
    //   clearInterval(countInterval.current as NodeJS.Timeout); //when user exits, clear this interval.
    // };
  }, []);


  // 0~100 사이로 값을 입력받고 해당 값에 대한 애니메이션 수행
  const loadAnimation = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: count, // final value
      duration: 500, // update value in 500 milliseconds
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval.current as NodeJS.Timeout);
    }
  }, []);

  const onCheckBoxChange = useCallback((num) =>() => {
    const updateCheckBoxValues = [...checkBoxValues];
    updateCheckBoxValues[num] = !updateCheckBoxValues[num];

    const total = checkBoxValues.length;
    const segment = 100 / total;
    const current = updateCheckBoxValues.filter((item) => item === true).length
    loadAnimation(segment * current)
    setCheckBoxValues(updateCheckBoxValues);

  }, [checkBoxValues]);

  if (!checkList || status!== 'success') {
    return <Loading text="필요한 체크리스트를 불러오고 있어요..."/>
  }

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
        <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#8BED4F", width}]}/>
      </View>

      <View style={styles.titleImageView}>
        <Image style={styles.titleImage} source={require('@assets/house.png')}/>
      </View>

      <View style={styles.titleView}>
        <Text style={styles.titleText}>[유저네임]의 전세집 계약하기</Text>
      </View>

      <Section/>

      <CheckBox
        disabled={false}
        value={checkBoxValues[0]}
        tintColors = {{ true: 'blue' , false: 'gray' }}
        style={styles.checkBoxToggle}
        onChange={onCheckBoxChange(0)}
      />
      <CheckBox
        disabled={false}
        value={checkBoxValues[1]}
        tintColors = {{ true: 'blue' , false: 'gray' }}
        style={styles.checkBoxToggle}
        onChange={onCheckBoxChange(1)}
      />
      <CheckBox
        disabled={false}
        value={checkBoxValues[2]}
        tintColors = {{ true: 'blue' , false: 'gray' }}
        onChange={onCheckBoxChange(2)}
      />
      <CheckBox
        disabled={false}
        value={checkBoxValues[3]}
        tintColors = {{ true: 'blue' , false: 'gray' }}
        style={styles.checkBoxToggle}
        onChange={onCheckBoxChange(3)}
      />

    </View>
  )
};

export default CheckListScreen;
