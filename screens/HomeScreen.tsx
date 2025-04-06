import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Category from "../components/Category";
import { useNavigation } from "@react-navigation/native";
import { getCompletedTests } from "../utils/storage";

const categories = [
  { id: "history", name: "Tarih" },
  { id: "general", name: "Genel Kültür" },
  { id: "movies", name: "Filmler" },
  { id: "music", name: "Müzik" },
];
const HomeScreen = () => {
  const navigation = useNavigation();
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  useEffect(() => {
    function fetchCompletedTest() {
      getCompletedTests().then((tests) => setCompletedTests(tests));
    }
    const unsubscribe = navigation.addListener("focus", fetchCompletedTest);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Category
              category={item}
              isCompleted={completedTests.includes(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          //space between lines
          contentContainerStyle={styles.FlatListContent}
          //space between columns
          columnWrapperStyle={{
            gap: 16,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#F8F8FF",
  },
  FlatListContent: {
    gap: 16,
    marginHorizontal: 16,
    paddingBottom: 10,
  },
});

export default HomeScreen;
