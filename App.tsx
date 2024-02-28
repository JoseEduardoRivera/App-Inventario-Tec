// App.tsx
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
