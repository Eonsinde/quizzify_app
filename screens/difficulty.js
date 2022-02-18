import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { globalStyles } from '../styles/global'


const Difficulty = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.paragraph}>Select Difficulty</Text>
        <View style={styles.btnsWrapper}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Questions', {difficulty:"easy"})}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Questions', {difficulty:"medium"})}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Questions', {difficulty:"hard"})}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }}>Hard</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  btnsWrapper: {
    width: "100%",
    flex: 2,
    alignContent: 'center',
  },

  btn: {
    marginVertical: 15,
    width: "100%",
    backgroundColor: "#70e000",
    paddingVertical: 18,
    borderRadius: 3
  }
})

export default Difficulty



