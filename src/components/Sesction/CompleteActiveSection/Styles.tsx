import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 80,
    borderWidth: 1,
    marginLeft: '5%',
    marginTop: 30,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },

  sectionViewLeftView: {

  },

  sectionViewLeftViewTextTop: {
    color: 'black',
    fontSize: 17,
  },

  sectionViewLeftViewTextBottom: {
    marginTop: 5,
  },

  sectionViewTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },

  sectionViewText: {
    color: 'blue',
    fontWeight: 'bold'
  },

  sectionViewActiveView: {

  },

});

export default styles;
