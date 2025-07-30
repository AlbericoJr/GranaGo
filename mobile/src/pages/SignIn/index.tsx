import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
} from "react-native"
import { useState, useContext } from "react"
import { styles } from "./styles"
import { AuthContext } from "../../contexts/auth"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type AuthStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

type SignInScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "SignIn"
>

export default function SignIn() {
  const navigation = useNavigation<SignInScreenNavigationProp>()
  const { signIn, loadingAuth } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn() {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!")
      return
    }

    try {
      await signIn(email, password)
    } catch (error) {
      Alert.alert("Erro", "Email ou senha incorretos!")
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.loginContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleSignIn}
          disabled={loadingAuth}
        >
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Acessar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.createAccountButtonText}>Criar uma conta!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
