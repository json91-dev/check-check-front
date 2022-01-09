import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    fontSize: 12,
    marginTop: 10,
  },

  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  }
});
