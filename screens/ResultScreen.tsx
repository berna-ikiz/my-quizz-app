import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import questions from "../data/questions";
import Button from "../components/Button";

type CategoryType = keyof typeof questions;

type Props = StaticScreenProps<{
  score: number;
  total: number;
  category: CategoryType;
}>;

const ResultScreen = ({ route }: Props) => {
  const navigation = useNavigation();

  const { score, total, category } = route.params;
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const handleRetry = () => {
    navigation.navigate("Quiz", { category: category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz is completed 🎉 🎊 🥳</Text>
      <Text style={styles.scoreText}>
        Correct Answers: {score} / {total}
      </Text>
      <Button
        title="🏠 Turn Back to The Home Page"
        onPress={handleHome}
        customButtonStyles={homeButtonStyle}
      />
      <Button
        title="🔂 Play Again"
        onPress={handleRetry}
        customButtonStyles={retryButtonStyle}
      />
    </View>
  );
};

const homeButtonStyle = {
  backgroundColor: "#F4708F",
};
const retryButtonStyle = {
  backgroundColor: "#4A7ACD",
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
});

export default ResultScreen;
