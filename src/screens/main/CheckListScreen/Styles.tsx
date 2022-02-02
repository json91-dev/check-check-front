import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  topNavigation: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },

  topNavigationTouch: {
    padding: 5,
    width: 40,
    height: 40,
  },

  topNavigationImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  progressBar: {
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  },
  titleImageView: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',

  },

  titleImage: {
    height: 100,
    resizeMode: 'contain',
  },

  titleView: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleText: {
    fontSize: 17,
    color: 'black'
  },

  checkBoxToggle: {

  },

});

export default styles;
