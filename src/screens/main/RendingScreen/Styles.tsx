import {StyleSheet} from "react-native";
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  headerView: {
    height: '15%',
    paddingTop: 50,
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  headerViewText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },

  buttonView: {
    height: '75%',
    paddingLeft:'10%',
    paddingRight: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomView: {
    height: '15%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  bottomViewTouch: {

  },

  bottomViewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  flatList: {
    height: '70%',
  },

  flatListContent: {
    paddingLeft: screenWidth * 0.1
  }
});

export default styles;
