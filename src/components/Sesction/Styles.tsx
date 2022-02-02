import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionView: {
    borderWidth: 2,
    width: '90%',
    height: 80,
    marginLeft: '5%',
    marginTop: 30,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },

  sectionViewInActiveView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  sectionViewInActiveViewLeftView: {

  },

  sectionViewInActiveViewLeftViewTextTop: {
    color: 'black',
    fontSize: 17,
  },

  sectionViewInActiveViewLeftViewTextBottom: {
    marginTop: 5,
  },

  sectionViewInActiveViewTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },

  sectionViewInActiveViewText: {
    color: 'blue',
    fontWeight: 'bold'
  },

  sectionViewActiveView: {

  },

});

export default styles;
