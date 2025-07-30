import { View, ActivityIndicator } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../contexts/auth"
import { AuthRoutes } from "./auth.routes"
import AppRoutes from "./app.routes"

export function Routes() {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1A202C" }}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}
