// ScreensNavigation.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryScreen, HomeScreen, ProductScreen } from "../screens";

export type StackParams = {
  HomeScreen: undefined;
  CategoryScreen: undefined;
  ProductScreen: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const InventoryNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};