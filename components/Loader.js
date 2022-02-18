import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function Loader({ image }) {
  return (
    <>
      <View style={styles.header}>
          <Image 
            source={image}
            style={styles.questionLoader}
          >
          </Image>
      </View>
      <View style={styles.optionsWrapper}>
          <Image source={image} style={styles.optionLoader}></Image>
          <Image source={image} style={styles.optionLoader}></Image>
          <Image source={image} style={styles.optionLoader}></Image>
          <Image source={image} style={styles.optionLoader}></Image>
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    marginVertical: 16,
  },
  
  optionsWrapper: {
    flex: 1
  },

  /* Loading-styles */
  questionLoader: {
    height: 35,
    width: "100%",
    opacity: .3
  },
  optionLoader: {
    height: 18,
    width: "100%",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    opacity: .2
  }
});
