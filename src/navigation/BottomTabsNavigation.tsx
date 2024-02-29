//BottomTbsNav.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApiScreen } from "../screens";
import { InventoryNavigation } from "./InventoryNavigation";
import { ProfileNavigation } from "./ProfileNavigation";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        paddingTop: 25,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={InventoryNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Api"
        component={ApiScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
