import React, {useCallback, useEffect, useRef, useState} from 'react'
import {ActivityIndicator, Animated, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useCheckList} from "@query/useCheckList";
import Loading from "@components/Loading/Loading"
import CheckBox from "@react-native-community/checkbox";
import styles from './Styles';
import Section from "./Sesction/Section";
import HelpModal from "@components/HelpModal/HelpModal";
import {getUserCheckListBySubjectId, useUserCheckList} from "@query/useUserCheckList";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";
import SectionManager from "@screens/main/CheckListScreen/Sesction/SectionManager";
import {useQuery} from "react-query";
import {defaultQueryOptions} from "@query/options";
import CheckProgressBar from "@components/CheckProgressBar/CheckProgressBar";
import useCheckProgress from "@query/useCheckProgress";

interface CheckListScreenProps {
  navigation: any,
  route: any
}

const CheckListScreen = ({ navigation, route }: CheckListScreenProps) => {
  const [showModal, setShowModal] = useState(true)

  let subjectId: number;
  if (route.params.subjectId) {
    subjectId = route.params.subjectId
  } else {
    subjectId = 1
  }
  const {total, current} = useCheckProgress(subjectId)

  const { data, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);
  const checkList: CheckListInterface = data;
  const isLoading = isFetching;
  const subTitle = checkList? checkList.subTitle: null;
  const imageUrl = checkList? checkList.imageUrl: null;
  const [count, setCount] = useState(0);
  const countInterval = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval.current as NodeJS.Timeout);
    }
  }, []);

  if (isLoading) {
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

      <CheckProgressBar current={current} total={total} />

      <ScrollView style={styles.titleScrollView}>
        <View style={styles.titleImageView}>
          <Image style={styles.titleImage} source={require('@assets/house.png')}/>
        </View>

        <View style={styles.titleView}>
          <Text style={styles.titleText}>{subTitle}</Text>
        </View>

        <SectionManager subjectId={subjectId} setShowModal={setShowModal}/>
      </ScrollView>

      <HelpModal />

    </View>
  )
};

export default CheckListScreen;
