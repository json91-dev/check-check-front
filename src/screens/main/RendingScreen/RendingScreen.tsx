import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "./Styles";
// @ts-ignore
import IconButton from "@components/IconButton/IconButton";
import {useCheckList} from "@query/checklist/useCheckList";

const RendingScreen = ({ navigation }: {navigation: any}) => {
  const {getCheckListSubjectsQuery} = useCheckList()
  const subjects  = getCheckListSubjectsQuery.data?.data;
  const [selectedSubjectTitle, setSelectedSubjectTitle] = useState('');
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(-1);
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const onPressTouch = useCallback(() => {
    navigation.navigate('CheckListScreen', {subjectId: selectedSubjectId})
  }, [selectedSubjectIndex])

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
          keyExtractor={(item, index) => index + item.source}
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

