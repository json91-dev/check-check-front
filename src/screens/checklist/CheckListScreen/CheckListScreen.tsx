import React from 'react'
import {ActivityIndicator, Text, View} from "react-native";
import {useCheckList} from "@/query/checklist/useCheckList";

const CheckListScreen = () => {
  const {status, data, error} = useCheckList;

  switch (status) {
    case 'loading': {
      return <ActivityIndicator/>
    }

    case 'error': {
      return <View><Text>에러</Text></View>
    }

    default: {
      return (
        <View>
          <Text>성공</Text>
        </View>
      )
    }
  }
};

export default CheckListScreen;
