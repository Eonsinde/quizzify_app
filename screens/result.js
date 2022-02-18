import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'


const Result = ({ navigation, route }) => {
  const handleResultMsg = () => {
    if (route.params.score >= 8) // above 8
      return "Excellent!";
    else if (route.params.score >= 5 && route.params.score <= 7) // btwn 5-7
      return "Nice Try";
    else if (route.params.score >= 0 && route.params.score <= 4) // btwn 0-4
      return "Quite Poor";
  }

  return (
    <View style={globalStyles.container}>
        <View>
            <Text style={{ color: "#fff", fontSize: '2rem', fontWeight: "bold", textAlign: 'center', marginVertical: 30 }}>SCORE</Text>
            <Text style={{ 
              color: (route.params.score < 5) ? "#ef233c" : "#70e000", 
              fontSize: '1.8rem', 
              fontWeight: "bold", 
              textAlign: 'center', 
              marginVertical: 15 
            }}>
              { handleResultMsg().toUpperCase() }
            </Text>
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
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
})


export default Result
