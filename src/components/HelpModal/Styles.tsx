import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
  },

  dimView: {
    height: '60%',
    width: '100%'
  },

  modalView: {
    height: '40%',
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  modalTitleView: {
    height: '20%',
    justifyContent: 'center'
  },

  modalTitleText: {
    color: '#3A86FF',
    fontSize: 21,
    fontWeight: '500',
  },

  modalSubTitleView: {
    height: '40%',
    width: '90%'
  },

  modalSubTitleText: {
    fontSize: 18,
    color: '#5D5F5D',
  },

  modalLineView: {
    width: '100%',
    height: 1,
    backgroundColor: '#E1E1E1'
  },

  modalTopicView: {
    height: '20%',

    marginTop: '10%'
  },

  modalTopicTitleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },

  modalTopicListView: {
    flexDirection: 'row',
    marginTop: 15,
  },

  modalTopicItemTouch: {
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: '3%',
    borderColor: '#568ADD'
  },

  modalTopicItemText: {
    fontSize: 15,
    color: '#568ADD'
  },

  modalCancelTouch: {
    position: "absolute",
    right: 30,
    width: 34,
    height: 34,
    top: 23,
  },

  modalCancelImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  }
});

export default styles;
