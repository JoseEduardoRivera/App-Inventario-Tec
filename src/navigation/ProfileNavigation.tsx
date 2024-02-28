// ScreensNavigation.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens";

export type StackParams = {
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<StackParams>();

export const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
