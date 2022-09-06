import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({ route }) {
  const catID = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {catID}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
