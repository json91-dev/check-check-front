import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const OnBoardPage1 = ({ navigation }: {navigation: any}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.checkBoxView}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          style={styles.checkBoxToggle}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          style={styles.checkBoxText}
        >
          세상의 모든 체크리스트, Check Check에 오신걸 환영합니다!
        </Text>
      </View>
      <View style={styles.checkBoxTextInfoView}>
        <Text style={styles.checkBoxTextInfo}>
          체크하시면서 진행해주세요.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.bottomViewLeftTouchText}>
            넘어가기
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomViewRightView}>
          <TouchableOpacity onPress={() => navigation.navigate('OnBoardPage2')}>
            <Text style={styles.bottomViewRightViewTouchText}>다음</Text>
          </TouchableOpacity>
          {/*<Image style={styles.} source={require('')}/>*/}
        </View>
      </View>
    </SafeAreaView>
  )
};

export default OnBoardPage1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },

  checkBoxView: {
    width: '80%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    borderWidth: 1,
    borderColor: 'blue',
  },

  checkBoxText: {
    width: '100%',
    flexShrink: 1
  },

  checkBoxToggle: {
    flexShrink: 1
  },

  checkBoxTextInfoView: {

  },

  checkBoxTextInfo: {

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
