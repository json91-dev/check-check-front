import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Styles';

const OnBoardPage1 = ({ navigation }: {navigation: any}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.boardingImageView}>
          <Image style={styles.boardingImage} source={require('../../../assets/boarding_main.png')} />
        </View>
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
      </View>
      {/*<View style={styles.checkBoxTextInfoView}>*/}
        {/*<Text style={styles.checkBoxTextInfo}>*/}
          {/*체크하시면서 진행해주세요.*/}
        {/*</Text>*/}
      {/*</View>*/}
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


