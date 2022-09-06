import React from "react";
import { FlatList, View } from "react-native";
import CategoryGrideTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressedTile() {
      navigation.navigate("mealsOverView");
    }

    return (
      <CategoryGrideTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressedTile}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
