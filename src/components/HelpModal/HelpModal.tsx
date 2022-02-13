import {Image, Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from './Styles';

const HelpModal = ({setShowModal}: {setShowModal: Function}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.dimView} />
        <View style={styles.modalView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitleText}>주민등록 초본 또는 등록 발급</Text>
          </View>

          <View style={styles.modalSubTitleView}>
            <ScrollView>
              <Text style={styles.modalSubTitleText}>
                FPO. 주민등록 초본 또는 등본 발급관한 설명 여기에 적기. 이 민원은 주민등록표의 확인이 필요한 경우 본인이나 세대원 및 정당한 이해관계가 있는 자들이 주민등록표등본(초본)을 신청하는 민원사무입니다. 수수료는 1통에 400원.
              </Text>
            </ScrollView>
          </View>


          <View style={styles.modalLineView}/>

          <View style={styles.modalTopicView}>
            <Text style={styles.modalTopicTitleText}>비슷한 토픽</Text>

            <View style={styles.modalTopicListView}>
              <TouchableOpacity style={styles.modalTopicItemTouch}>
                <Text style={styles.modalTopicItemText}>주민등록증</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalTopicItemTouch}>
                <Text style={styles.modalTopicItemText}>가족관계 증명서</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalTopicItemTouch}>
                <Text style={styles.modalTopicItemText}>주민등록증</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.modalCancelTouch} onPress={() => setShowModal(false)}>
            <Image style={styles.modalCancelImage} source={require('@assets/xbutton.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default HelpModal
