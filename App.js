import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          //It affects all screens
          screenOptions={{
            headerSearchBarOptions: true,
          }}
        >
          <Stack.Screen
            name="AllCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",

              headerStyle: { backgroundColor: "red" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "black" },
            }}
          />
          <Stack.Screen
            name="mealsOverView"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              // ya mitoonim dakhele khode <MealsOverviewScreen /> az navigation.setOptions({}) be jae options estefade kard
              const catID = route.params.categoryId;
              return {
                title: catID,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
