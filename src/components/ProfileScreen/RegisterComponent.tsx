import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { userCtl } from "../../api";

export function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await userCtl.register(email, username, password);
      Alert.alert("Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>REGISTRAR USUARIO</Text>
      <TextInput
        label={"Correo electronico"}
        value={email}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={"Nombre de usuario"}
        value={username}
        mode="outlined"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        label={"Contraseña"}
        value={password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={registerUser}>REGISTRAR</Button>
    </View>
  );
}
