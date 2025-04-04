import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { createStaticNavigation } from "@react-navigation/native";
import QuizScreen from "../screens/QuizScreen";
import ResultScreen from "../screens/ResultScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Quiz Categories",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "cornflowerblue",
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "600",
          color: "#F8F8FF",
        },
      },
    },
    Quiz: QuizScreen,
    ResultScreen: ResultScreen,
  },
});

const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;
