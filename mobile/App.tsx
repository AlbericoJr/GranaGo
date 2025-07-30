import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"

import { Routes } from "./src/routes"
import AuthProvider from "./src/contexts/auth"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
