import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  checkBoxView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  },

  checkBoxText: {
    width: '100%',
    flexShrink: 1,
    marginLeft: 7
  },

  checkBoxToggle: {
    flexShrink: 1,
  },

  checkBoxTextInfoView: {

  },

  checkBoxTextInfo: {

  },

  bottomView: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomViewText: {

  },

  bottomViewRightView: {

  },

  bottomViewLeftTouch: {

  },

  bottomViewLeftTouchText: {
    color: '#3070D5'
  },

  bottomViewRightViewTouchText: {
    color: '#3070D5'
  },

  boardingImageView: {
    width: '80%',
    height: '80%',
  },

  boardingImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  topView: {
    borderWidth: 1,
    width: '80%',
    height: '60%',
    marginLeft: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems:'center',
    borderColor: '#7199DF',
    borderRadius: 6
  }
});

export default styles;
