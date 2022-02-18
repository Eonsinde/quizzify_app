import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function QuizOption({ text:optionText, setActiveOption, setAnswer }) {
  const handleSetting = () => {
    // console.log(optionText, "Hello world");
    setAnswer(optionText);
  }

  return (
    <TouchableOpacity 
      style={styles.option}
      onPress={() => handleSetting()}
    >
      <Text style={styles.optionText}>{optionText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: "#70e000",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  optionText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: "1.0rem"
  },
});
