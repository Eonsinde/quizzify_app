import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { globalStyles } from '../styles/global'


const Result = ({ navigation, route }) => {
  return (
    <View style={globalStyles.container}>
        <View>
            <Text style={{ color: "#fff", fontSize: '2rem', fontWeight: "bold", textAlign: 'center', marginVertical: 30 }}>SCORE</Text>
        </View>
        <View style={globalStyles.bannerWrapper}>
          <Image
              // source={{uri: "https://storyset.com/illustration/documents/amico#70E000FF&hide=&hide=complete"}}
              source={require("../assets/Documents-amico.png")}
              style={globalStyles.bannerIMG}
              resizeMode='contain'
          >
          </Image>
          <Text style={styles.scoreText}>{route.params.score}/10</Text>
        </View>
        <TouchableOpacity style={globalStyles.btn} onPress={() => navigation.navigate("Home")}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }}>Home</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  scoreText:{
    color: "#fff",
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
})


export default Result
