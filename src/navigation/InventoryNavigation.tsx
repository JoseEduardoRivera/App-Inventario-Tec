// ScreensNavigation.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryScreen, HomeScreen, ProductScreen } from "../screens";
import { Category } from "../interfaces/category-interface";
import { UniqueProductData } from "../interfaces/product-interface";

export type InventoryParams = {
  HomeScreen: undefined;
  CategoryScreen: { category: Category };
  ProductScreen: { product: UniqueProductData };
};

const Stack = createStackNavigator<InventoryParams>();

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
