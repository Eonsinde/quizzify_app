import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { getQuestions } from '../handleRequests/getQuestions'

import Quiz from '../components/Quiz'
import Loader from '../components/Loader'

import AwesomeAlert from 'react-native-awesome-alerts'


const Questions = ({ navigation, route }) => {
  let [questions, setQuestions] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  
  // quiz implementation
  let [currentQuestionId, setCurrentQuestionId] = useState(0);
  let [score, setScore] = useState(0);
  let [answer, setAnswer] = useState('');
  let [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    getQuestions(route.params.difficulty)
      .then(data => {
        setQuestions(data.results)
        setIsLoading(false)
      });
  }, []);

  const quizAtEnd = () => {
    // if current question index === questions array len - 1; since we using indexing
    return (currentQuestionId === questions.length-1) ? true : false;
  }

  const changeQuestion = () => {
    if (!quizAtEnd()){
      setCurrentQuestionId(currentQuestionId + 1);
    }
  }

  const handleQuestionUpdate = (action) => {
    // check action - NEXT | SKIP | END 
    let currentQuestion = questions[currentQuestionId];

    switch(action){ // determines if score updating needs be considered or not
      case "NEXT":
        if (answer === ''){
          // don't change question if action NEXT and answer be blank
          setDisplayAlert(true);
        }else{ // if option clicked
          if (answer === currentQuestion.correct_answer){
            setScore(score + 1);
          }
          // update current question
          changeQuestion();
        }
        setAnswer(''); // very important for alert to work if needed - reset answer
        break;

      case "END": // added this CASE to ensure the last question be scored
        if (answer === ''){
          setDisplayAlert(true);
        }else{ // if not blank and ready to finish
          if (answer === currentQuestion.correct_answer){
            setScore(score + 1);
          }
          navigation.navigate("Result", {score});
        }
        setAnswer(''); // very important for alert to work if needed - reset answer
        break;

      case "SKIP":
      default:
        // update current question Id if quiz not at end
        changeQuestion()
        break;
    }

    setTimeout(() => setDisplayAlert(false), 1000); // to ensure it opens again on next trigger
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.quizSection}>
        {
          !isLoading
          ? // after load complete - render questions
          <Quiz data={questions[currentQuestionId]} number={currentQuestionId} setAnswer={setAnswer} />
          : // if trying to fetch data - show loader
          <>
            <Loader image={require("../assets/loading.gif")} />
          </>
        }

        <View style={styles.btnsWrapper}>
          <TouchableOpacity 
            style={styles.btn}disabled={isLoading || quizAtEnd() ? true : false} 
            onPress={() => handleQuestionUpdate("SKIP")}  
          >
            <Text style={styles.btnText}>Skip</Text>
          </TouchableOpacity>
          {
            !quizAtEnd()
            ? // show NEXT btn
            <TouchableOpacity 
              style={styles.btn}disabled={isLoading ? true : false} 
              onPress={() => handleQuestionUpdate("NEXT")}  
            >
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
            : // show END btn
            <TouchableOpacity 
              style={styles.btn} 
              onPress={() => handleQuestionUpdate("END")} 
              disabled={isLoading ? true : false}
            >
              <Text style={styles.btnText}>End</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
    <AwesomeAlert
      show={displayAlert}
      title="Invalid Entry"
      message="Select an option or Skip"
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      overlayStyle={{ height:"100%", backgroundColor:"#131012cc" }}
      contentContainerStyle={{ backgroundColor:"#70e000" }}
      contentStyle={{ backgroundColor:'#70e000'}}
      titleStyle={{ color:'#fff', fontWeight:"bold", fontSize:"1.2rem" }}
      messageStyle={{ color:'#fff', fontWeight:"bold" }}
      onCancelPressed={() => {
        setDisplayAlert(false);
      }}
    />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Constants.statusBarHeight,  
    paddingHorizontal: 18,
    paddingBottom: 30,
    backgroundColor: '#131012',
  },

  quizSection: {
    height: "100%"
  },
  
  btnsWrapper: {
    width: "100%",
    // paddingTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#70e000",
    paddingVertical: 10,
    borderRadius: 3,
    width: "30%"
  },
  btnText: {
    color: "#fff",
    fontSize: "1.0rem",
    fontWeight: "bold",
    textAlign: "center"
  }
})


export default Questions
