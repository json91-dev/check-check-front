import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  bottomImageView : {
    position: 'absolute',
    bottom: '3%',
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomImageTouch: {
    height: '21%',
    width: '90%',
    marginBottom: '2%'
  },

  bottomImage : {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});



export default styles;
