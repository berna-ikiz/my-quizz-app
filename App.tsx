// In App.js in a new project

import * as React from "react";
import StackNavigator from "./navigation/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.bottomSheetContainer}>
      <StackNavigator />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
})
