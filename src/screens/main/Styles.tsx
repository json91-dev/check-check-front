import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '30%',
    marginBottom: 10,
  },

  headerView: {
    height: '10%',
    paddingTop: 20,
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  headerViewText: {
    fontSize: 18,
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
});

export default styles;
