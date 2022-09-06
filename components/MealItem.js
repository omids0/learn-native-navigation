import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }} style={styles.press}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mealDetails}>
          <Text style={styles.mealExplan}>{duration}m</Text>
          <Text style={styles.mealExplan}>{complexity}</Text>
          <Text style={styles.mealExplan}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 30,
  },
  mealDetails: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mealExplan: {
    marginHorizontal: 5,
  },
  press: {
    padding: 16,
    borderRadius: 8,
  },
});
