import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 80,
    borderWidth: 2,
    marginLeft: '5%',
    marginTop: 30,
    borderColor: '#568ADD',
    borderRadius: 5,
    paddingLeft: 30,
    paddingRight: 10,
  },

  leftView: {

  },

  leftViewTextTop: {
    color: 'black',
    fontSize: 17,
  },

  leftViewTextBottom: {
    marginTop: 5,
  },

  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },

  touchText: {
    color: '#3070D5',
    fontWeight: 'bold'
  },

  imageView: {
    position: 'absolute',
    left: 0,
  },

  imageViewImage: {
    width: 30,
    height: 30,
    left: -15,
    resizeMode: 'contain'
  },

  imageViewInnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    th: 1,
    left: -15,
    width: 30,
    height: 30,
    top: 0,
    paddingBottom: 2,
    paddingRight: 1,
  },

  imageViewInnerViewText: {
    color: '#3070D5',
    fontSize: 14,
    fontWeight: 'bold'
  },

});

export default styles;
