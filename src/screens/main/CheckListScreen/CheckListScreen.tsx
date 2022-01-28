import React, {useEffect} from 'react'
import {ActivityIndicator, Text, View} from "react-native";
import {useCheckList} from "../../../query/checklist/useCheckList";
import Loading from "../../../components/Loading/Loading"
import styles from './Styles';

const CheckListScreen = () => {
  const {checkList, status, error} = useCheckList();

  if (!checkList || status!== 'success') {
    return <Loading text="필요한 체크리스트를 불러오고 있어요..."/>
  }

  const { title, subTitle } = checkList;



  return (
    <View>
      <Text>{subTitle}</Text>
    </View>
  )
};

export default CheckListScreen;
