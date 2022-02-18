import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function Quiz({ data, number, setAnswer }) {
  let [questionOptions, setQuestionOptions] = useState([]);

  useEffect(() => {
    // since correct answer is not in the same array with incorrect answers
    // join them together to create options. Also convert them to objects and shuffle 
    let shuffledOptions = shuffleArray(buildOptionsObject([data.correct_answer, ...data.incorrect_answers]));
    setQuestionOptions(shuffledOptions);
  }, [data.question]);

  const buildOptionsObject = (arr) => {
    // make sure to use this so that when options are fewer, 
    // everything works fine
    let outputArr = [], i=0;
    for (i=0; i < arr.length; i++){
      outputArr.push({ id: i+1, value: arr[i], bgColor: '#70e000', active: false });
    }
    return outputArr;
  }

  const shuffleArray = (array) => {
    return array.sort(() => Math.random()-0.5 );
  }

  const handleOptionUpdate = option => {
    // sets answer and changes background
    let options = questionOptions;

    for (let i = 0; i < questionOptions.length; i++) {
      if (questionOptions[i].id == option.id) { 
        // set answer
        setAnswer(options[i].value);
        options[i].bgColor = '#70e00098';
        setQuestionOptions(options);
      } else {
        options[i].bgColor = '#70e000';
        setQuestionOptions(options);
      }
    }
  }

  return (
    <>
      <View style={styles.questionWrapper}>
          <Text style={styles.question}>Q{number+1}. {data.question}</Text>
      </View>

      <View style={styles.optionsWrapper}>
        {questionOptions.map((item, key) => (
          <TouchableOpacity
            key={item.id}
            style={{
              marginVertical: 10,
              paddingVertical: 12,
              paddingHorizontal: 12,
              backgroundColor: item.bgColor,
            }}
            onPress={() => handleOptionUpdate(item)}
          >
            <Text style={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: "1.0rem"
            }}>
              {item.value}
            </Text>
          </TouchableOpacity>
        ))}
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
