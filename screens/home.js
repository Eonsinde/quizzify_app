import { TouchableOpacity, Image, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'


const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.paragraph}>Quizzify</Text>
        <View style={globalStyles.bannerWrapper}>
            <Image
                // source={{uri: "https://storyset.com/illustration/questions/bro#70E000FF&hide=&hide=complete"}}
                source={require("../assets/Questions-bro.png")}
                style={globalStyles.bannerIMG}
                resizeMode='contain'
            >
            </Image>
        </View>
        <TouchableOpacity style={globalStyles.btn} onPress={() => navigation.navigate("Difficulty")}>
            <Text style={{ color: "#fff", textAlign: "center", fontSize: "1.1rem", fontWeight: "bold" }}>Play</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home
