import { View, Text } from "react-native";
import React from "react";
import { AdminPanel, LoginComponent } from "../components/ProfileScreen";

export function ProfileScreen() {
  const user = null;
  return (
    <View>
      <Text>ProfileScreen</Text>
      {user ? <AdminPanel /> : <LoginComponent />}
    </View>
  );
}
