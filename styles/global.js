import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export const globalStyles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,  
    paddingHorizontal: 18,
    paddingBottom: 30,
    backgroundColor: '#131012',
  },

  paragraph: {
    color: "#fff",
    fontSize: '2rem',
    fontWeight: "bold",
    textAlign: 'center',
    marginVertical: 30
  },
  
  bannerWrapper: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  bannerIMG: {
    height: 280,
    width: 280
  },

  btn: {
    width: "100%",
    backgroundColor: "#70e000",
    paddingVertical: 18,
    borderRadius: 3
  }
})