import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Quiz:QuizScreen,
    ResultScreen
  },
});

const StackNavigator = createStaticNavigation(RootStack);


export default StackNavigator