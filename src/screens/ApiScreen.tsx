import { View, Text, Button } from "react-native";
import React from "react";
import { userContext } from "../context/userContext";
import { RegisterComponent } from "../components";

export function ApiScreen() {
  const { user, closeSession } = userContext((state) => ({
    user: state.user,
    closeSession: state.closeSession,
  }));

  const showLogoutButton = user.user && user.user.id !== 0;

  return (
    <View style={{}}>
      <Text>ApiScreen</Text>

      {showLogoutButton && (
        <Button onPress={closeSession} title="Cerrar sesion" />
      )}
      <View>
        <RegisterComponent />
      </View>
    </View>
  );
}
