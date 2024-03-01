import { View, Text, Image } from "react-native";
import React from "react";
import { AdminPanelComponent, LoginComponent } from "../components";
import { userContext } from "../context/userContext";

export function ProfileScreen() {
  const user = userContext((state) => state.user);

  return (
    <View>
      <View style={{ backgroundColor: "#4BDDE3" }}>
        <Image
          source={require("../../assets/adminPanel.png")}
          style={{ height: 250, width: "100%" }}
        />
      </View>
      <View
        style={{
          padding: 20,
          marginTop: -50,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 25 }}>
          Panel de administracion
        </Text>
        {user.user && user.user.id !== 0 ? (
          <AdminPanelComponent />
        ) : (
          <LoginComponent />
        )}
      </View>
    </View>
  );
}
