import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Divider } from "react-native-paper";
import { userContext } from "../../context/userContext";

export function LoginComponent() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const login = userContext((state) => state.login);

  const handleLogin = async () => {
    try {
      console.log({ identifier, password });

      await login({ identifier, password });
      Alert.alert("Success");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={{ paddingTop: 15 }}>
      <Text
        style={{
          alignSelf: "center",
          paddingVertical: 15,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Iniciar sesion
      </Text>
      <View>
        <TextInput
          placeholder="Identificador (email o username)"
          mode="outlined"
          label={"Identificador"}
          activeOutlineColor="#4BDDE3"
          value={identifier}
          onChangeText={(text) => setIdentifier(text)}
        />
        <TextInput
          placeholder="Contraseña"
          mode="outlined"
          label={"Contraseña"}
          activeOutlineColor="#4BDDE3"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            console.log("Password input changed:", text);
            setPassword(text);
          }}
        />
        <Button
          mode="contained"
          buttonColor="#4BDDE3"
          onPress={handleLogin}
          style={{ marginTop: 15 }}
        >
          INICIAR SESION
        </Button>
        <Divider style={{ marginVertical: 10 }} />
      </View>
    </View>
  );
}
