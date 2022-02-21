import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    borderWidth: 2,
    marginLeft: '5%',
    marginTop: 30,
    borderColor: '#568ADD',
    borderRadius: 5,
    paddingTop: 15,
    paddingLeft: 30,
    paddingBottom: 30,
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

  imageView: {
    position: 'absolute',
    top: 12,
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
    left: -15,
    width: 30,
    height: 30,
    top: 0,
  },

  imageViewInnerViewText: {
    color: '#3070D5',
    fontSize: 14,
    fontWeight: 'bold'
  },

  elementView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -7,
    marginTop: 20,

  },

  elementViewText: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 5,
  },

  elementViewTouch: {
    position: 'absolute',
    width: 30,
    height: 30,
    padding: 4,
    right: 0,
  },

  elementViewTouchImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  subTitleView: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  subElementRowView: {
    marginTop: 20,
    flexDirection: 'row'

  }
});

export default styles;
