import { useContext, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native"
import { styles } from "./styles"

import { AuthContext } from "../../contexts/auth"

type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "SignUp"
>

export default function SignUp() {
  const navigation = useNavigation<SignUpScreenNavigationProp>()
  const { signUp, loadingAuth } = useContext(AuthContext)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp() {
    if (nome === "" || email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!")
      return
    }

    try {
      await signUp(nome, email, password)
      Alert.alert("Sucesso", "Conta criada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ])
    } catch (error) {
      Alert.alert("Erro", "Erro ao criar conta. Tente novamente.")
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.loginContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seu nome"
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seu E-mail"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Sua senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleSignUp}
          disabled={loadingAuth}
        >
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
