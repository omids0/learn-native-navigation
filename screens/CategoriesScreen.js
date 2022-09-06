import React from "react";
import { FlatList } from "react-native";
import CategoryGrideTile from "../components/CategoryGrideTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function handleTilePress() {
      navigation.navigate("mealsOverView", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGrideTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleTilePress}
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
