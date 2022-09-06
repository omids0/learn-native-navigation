import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGrideTile({ title, color }) {
  return (
    <View style={{ backgroundColor: color }}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrideTile;
