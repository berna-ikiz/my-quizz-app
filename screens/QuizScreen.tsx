import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import questions from "../data/questions";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { saveCompletedTest } from "../utils/storage";
import { BackIcon, HintIcon } from "../utils/icon";
import Button from "../components/Button";

type CategoryType = keyof typeof questions;

type Props = StaticScreenProps<{
  category: CategoryType;
}>;

const QuizScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setShowHint(false);
    }
  }, []);

  const { category } = route.params;
  const quizQuestions = questions[category];
  const { question, options, answerIndex, hint } =
    quizQuestions[currentQuestionIndex];

  const handleAnswer = async (option: string, optionIndex: number) => {
    console.log(optionIndex)
    console.log(answerIndex)
    if (optionIndex === answerIndex) {
      console.log('here')
      setScore((prev) => prev + 1);
    }
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      if (score === quizQuestions.length) {
        await saveCompletedTest(category);
      }

      navigation.navigate("Result", {
        score,
        total: quizQuestions.length,
        category,
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, i) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => handleAnswer(option, i)}
          >
            <Text
              style={styles.optionText}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        customButtonStyles={styles.hint}
        onPress={() => setShowHint((prev) => !prev)}
        customTextStyle={styles.hintText}
        icon={<HintIcon size={40} />}
        disabled={false}
      />
      {currentQuestionIndex !== 0 && (
        <Button
          customButtonStyles={styles.prevQuestion}
          onPress={() => setCurrentQuestionIndex((prev) => prev - 1)}
          customTextStyle={styles.prevQuestionText}
          icon={<BackIcon size={40} />}
          disabled={currentQuestionIndex === 0}
        />
      )}
      {showHint && (
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["50%", "100%"]}
          enablePanDownToClose
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.bottomSheetContentContainer}>
            <Text style={styles.bottomSheetTitle}> 🔎 Ipucu 🔍</Text>
            <Text style={styles.bottomSheetDescription}>{hint}</Text>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 16,
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
  optionsContainer: {
    gap: 16,
  },
  hint: {
    backgroundColor: "#F4D570",
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 32,
    right: 16,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  hintText: {
    color: "#F8F8FF",
    fontSize: 36,
    fontWeight: "bold",
  },
  prevQuestion: {
    backgroundColor: "#F4708F",
    width: "24%",
    position: "absolute",
    bottom: 32,
    left: 16,
    borderRadius: 28,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  prevQuestionText: {
    color: "#F8F8FF",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomSheetContentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
    gap: 16,
  },
  bottomSheetTitle: {
    fontSize: 28,
  },
  bottomSheetDescription: {
    fontSize: 22,
  },
});
export default QuizScreen;
