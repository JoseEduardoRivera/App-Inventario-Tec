// ScreensNavigation.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens";

export type ProfileParams = {
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<ProfileParams>();

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
