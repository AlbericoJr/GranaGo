import { useContext } from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"

import { styles } from "./styles"

import Header from "../../components/Header"

import { AuthContext } from "../../contexts/auth"

import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../routes/types" // ajuste o caminho conforme seu projeto

export default function Profile() {
  const { signOut, user } = useContext(AuthContext)
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Registrar">>()

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Perfil" />

      <Text style={styles.message}>Bem vindo de volta!</Text>

      <Text style={styles.name} numberOfLines={1}>
        {user && user?.name}
      </Text>

      <TouchableOpacity
        style={styles.newLink}
        onPress={() => navigation.navigate("Registrar")}
      >
        <Text style={styles.newLinkText}>Fazer registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => signOut()}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
