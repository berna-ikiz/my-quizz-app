import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // TODO: assign types
  // @ts-ignore
  const { score, total, category } = route.params;
  const handleHome = () => {
       navigation.navigate("Home");
  }
  const handleRetry = () =>{
    navigation.navigate("Quiz", { category: category});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz is completed 🎉 🎊 🥳</Text>
      <Text style={styles.scoreText}>
        Correct Answers: {score} / {total}
      </Text>
      <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
        <Text style={styles.homeText}>🏠 Turn Back to The Home Page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
        <Text style={styles.retryText}>🔂 Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
  },
  scoreText: {
    fontSize: 20,
  },
  homeButton: {
    backgroundColor: "#F4708F",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 20,
  },
  homeText: {
    color: "#F8F8FF",
    fontSize: 16,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#4A7ACD",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 20,
  },
  retryText: {
    color: "#F8F8FF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ResultScreen;
