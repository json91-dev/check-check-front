import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'flex-start',
  },

  leftView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',

  },

  leftViewImageView: {

  },

  leftViewImageViewImage: {
    width: 27,
    height: 27,
    resizeMode: 'contain'
  },

  rightView: {
    width: '70%',
    paddingLeft: 10,
    paddingTop: 6,
  },

  rightViewTitleText: {
    color: '#5D5F5D',
    fontSize: 15,
    fontWeight: 'bold'
  },

  rightViewSubTitleText: {
    marginTop: 15
  }

});

export default styles;
