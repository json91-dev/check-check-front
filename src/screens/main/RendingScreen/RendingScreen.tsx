import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "./Styles";
// @ts-ignore
import IconButton from "@components/IconButton/IconButton";
import {getAccessTokenApi, getStorageUser, setStorageUser} from "@hooks/useStorageUser";
import {useCheckListSubject} from "@query/useUserCheckList";

const RendingScreen = ({ navigation }: {navigation: any}) => {
  const {data: subjectData, status} = useCheckListSubject()
  const subjects = subjectData?.data;
  const [selectedSubjectTitle, setSelectedSubjectTitle] = useState('');
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(-1);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const onPressTouch = useCallback(() => {
    navigation.navigate('CheckListScreen', {subjectId: selectedSubjectId})
  }, [selectedSubjectIndex])

  // TODO: 매 시작시 Access Token을 발급받고 갱신함
  //       (연동하지 않고 시작하기 일때는 제외)
  useEffect( () => {
    const updateToken = async () => {
      const user: any = await getStorageUser();
      if (user) {
        const response: any = await getAccessTokenApi(user.email, user.provider)
        const { accessToken: newToken } = response.data;
        await setStorageUser({
          ...user,
          token: newToken,
        })
      }
    }

    updateToken().catch(error => {
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>
          [유저이름]님, 어떤곳에서 도움이 필요하신가요?
        </Text>
      </View>

      {subjects?
        <FlatList
          data={subjects}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          renderItem={({item, index}) => {
            return <IconButton
              key={item.subjectId + item.subjectTitle}
              source={{uri: 'https://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'}}
              subject={item}
              index={index}
              setSelectedSubjectTitle={setSelectedSubjectTitle}
              setSelectedSubjectIndex={setSelectedSubjectIndex}
              selectedSubjectIndex={selectedSubjectIndex}
              setSelectedSubjectId={setSelectedSubjectId}
            />
          }}
          numColumns={2}
        /> : null
      }

      { selectedSubjectIndex > -1
        ? (
          <View style={styles.bottomView}>
            <TouchableOpacity style={styles.bottomViewTouch} onPress={onPressTouch}>
              <Image style={styles.bottomViewImage} source={require('@assets/next_btn_active.png')} />
            </TouchableOpacity>
          </View>
        )
        : (
          <View style={styles.bottomView}>
            <Image style={styles.bottomViewImage} source={require('@assets/next_btn_inactive.png')} />
          </View>
        )
      }
    </SafeAreaView>
  )
};

export default RendingScreen;

