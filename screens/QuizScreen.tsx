import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import questions from "../data/questions";

const QuizScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIOndex] = useState(0);
  const [score, setScore] = useState(0);
  // TODO : Add types
  // @ts-ignore
  const { category } = route.params;
  const quizQuestions = questions[category];
  const { question, options, answerIndex, hint } = quizQuestions[currentQuestionIndex];
  const handleAnswer = (option, optionIndex) =>{
    if(optionIndex === answerIndex ){
      setScore(prev =>prev + 1);
    }
    if(currentQuestionIndex + 1 < quizQuestions.length)
    {
      setCurrentQuestionIOndex(prev => prev + 1);
    }else{
      //TODO: ADD types
      //@ts-ignore
       navigation.navigate("Result", {score, total: quizQuestions.length})
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style = {styles.optionsContainer}>
        {options.map((x, i) => (
          <TouchableOpacity 
          key={x}
          style={styles.option} 
          onPress={()=> handleAnswer(x,i)}>
            <Text style={styles.optionText} adjustsFontSizeToFit numberOfLines={1}>{x}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap:16,
  },
  question: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "gray",
  },
  option: {
    padding: 10,
    backgroundColor: "cornflowerblue",
    borderRadius: 8,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  optionsContainer:{
    gap: 16,
  }
});
export default QuizScreen;
