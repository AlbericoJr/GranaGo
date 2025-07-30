import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SingUp"

const AuthStack = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#2D384D",
          },
          headerTintColor: "#FFF",
          headerTitle: "Voltar",
          headerBackVisible: true,
          headerShadowVisible: false,
        }}
      />
    </AuthStack.Navigator>
  )
}
