import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  bottomImageView : {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomImage : {
    resizeMode: 'contain',
    height: '100%'
  }
});

export default styles;
