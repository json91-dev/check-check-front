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
    paddingTop: 20,
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
    height: 10,
    flexDirection: "row",
    width: '100%',
    backgroundColor: '#EFEFEF',
    marginTop: 10
  },
  titleImageView: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleImage: {
    height: '100%',
    resizeMode: 'contain',
  },

  titleScrollView: {
    marginTop: 30
  },

  titleView: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleText: {
    fontSize: 25,
    color: '#0E0E0E',
  },

  checkBoxToggle: {

  },

});

export default styles;
