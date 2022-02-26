import {Dimensions, StyleSheet} from "react-native";
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.4,
    height: screenWidth * 0.4
  },

  touch: {
    width: '94%',
    height: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    fontSize: 17,
    marginTop: 20,
    fontWeight: 'bold'
  },

  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  }
});

export default styles;
