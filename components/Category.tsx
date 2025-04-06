import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";


type CategoryId = "history" | "movies" | "music" | "general";

type Category = {
  id: CategoryId;
  name: string;
}; 

type Props = {
  category: Category;
  isCompleted: boolean;
};

const Category = ({ category: { id, name }, isCompleted }: Props) => {
  const navigation = useNavigation();
  const handlePressed = () => {
    navigation.navigate("Quiz", { category: id });
  };
  return (
    <Button
      title={`${name} ${isCompleted && "☑"}`}
      onPress={handlePressed}
      customButtonStyles={customButtonStyles}
      customTextStyle={costomTextStyles}
    />
  );
};
const customButtonStyles = {
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
};
const costomTextStyles = {
  fontSize: 24,
  color: "white",
  textAlign: "center",
  fontWeight: "600",
};
export default Category;
