import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from "@react-native-community/checkbox";

const OnBoardPage2 = ({ navigation }: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.bottomViewLeftTouchText}>
            넘어가기
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomViewRightView}>
          <TouchableOpacity onPress={() => navigation.navigate('OnBoardPage3')}>
            <Text style={styles.bottomViewRightViewTouchText}>다음</Text>
          </TouchableOpacity>
          {/*<Image style={styles.} source={require('')}/>*/}
        </View>
      </View>
    </SafeAreaView>
  )
};

export default OnBoardPage2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    backgroundColor: 'white'
  },

  bottomView: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  bottomViewText: {

  },

  bottomViewRightView: {

  },

  bottomViewLeftTouch: {

  },

  bottomViewLeftTouchText: {
    color: '#3070D5'
  },

  bottomViewRightViewTouchText: {
    color: '#3070D5'
  }

});
