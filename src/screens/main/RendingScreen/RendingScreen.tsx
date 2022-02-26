import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from "./Styles";
// @ts-ignore
import IconButton from "@components/IconButton/IconButton";

const RendingScreen = ({ navigation }: {navigation: any}) => {
  const [items, setItems] = useState([
    {
      source: '@assets/monthly_pay.png',
      isChecked: false
    },
    {
      source: '@assets/yearly_pay.png',
      isChecked: false
    },
    {
      source: '@assets/moving_truck.png',
      isChecked: false
    },
    {
      source: '@assets/buy_house.png',
      isChecked: false
    },
    {
      source: '@assets/search_house.png',
      isChecked: false
    },
    {
      source: '@assets/cart.png',
      isChecked: false
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>
          [유저이름]님, 어떤곳에서 도움이 필요하신가요?
        </Text>
      </View>

      <FlatList
        data={items}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <IconButton source={require('@assets/monthly_pay.png')} text={'월세 계약'}/>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index + item}
      />

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomViewTouch}>
          <Image style={styles.bottomViewImage} source={require('@assets/next_btn_active.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default RendingScreen;

