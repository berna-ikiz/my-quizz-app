import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Category = {
  id: string;
  name: string;
};

type Props = {
  category: Category;
};

const Category = ({ category: { id, name } }: Props) => {
  const navigation = useNavigation();
  const handlePressed = () => {
    // TODO: Fix Types
    // @ts-ignore
    navigation.navigate("Quiz", { category: id });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={() => handlePressed()}>
      <Text style={styles.text}> {name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    backgroundColor: "cornflowerblue",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
export default Category;
