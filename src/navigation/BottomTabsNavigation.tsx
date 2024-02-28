//BottomTbsNav.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApiScreen } from "../screens";
import { InventoryNavigation } from "./InventoryNavigation";
import { ProfileNavigation } from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        padding: 20,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={InventoryNavigation} />
      <Tab.Screen name="Api" component={ApiScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};
