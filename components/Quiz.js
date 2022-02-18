import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import QuizOption from './QuizOption'


export default function Quiz({ data, number, setAnswer }) {
  let [questionOptions, setQuestionOptions] = useState([]);

  useEffect(() => {
    // since correct answer is not in the same array with incorrect answers
    // join them together to create options. Also shuffle it
    let shuffledOptions = shuffleArray([data.correct_answer, ...data.incorrect_answers]);
    setQuestionOptions(shuffledOptions);
  }, [data.question]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random()-0.5 );
  }

  return (
    <>
      <View style={styles.questionWrapper}>
          <Text style={styles.question}>Q{number+1}. {data.question}</Text>
      </View>

      <View style={styles.optionsWrapper}>
        <FlatList
          data={questionOptions}
          renderItem={({item}) => <QuizOption text={item} setAnswer={setAnswer} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  questionWrapper:{
    marginVertical: 16,
  },
  question: {
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  
  optionsWrapper: {
    flex: 1
  },
});
