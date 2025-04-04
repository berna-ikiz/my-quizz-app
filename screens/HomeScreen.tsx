import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import Category from "../components/Category";

const categories = [
  { id: "history", name: "Tarih" },
  { id: "general", name: "Genel Kültür" },
  { id: "movies", name: "Filmler" },
  { id: "music", name: "Müzik" },
];
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Category category={item} />}
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
