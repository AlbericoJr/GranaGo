import { createContext, useState, ReactNode, useEffect } from "react"

import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextData {
  signed: boolean
  user: User | null
  signUp: (nome: string, email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  loadingAuth: boolean
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@granaGo")

      if(storageUser) {
        const response = await api.get("/me", {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(() => {
          setUser(null)
        })

        api.defaults.headers["Authorization"] = `Bearer ${storageUser}`
        setUser(response.data)
        setLoading(false)
      }

      setLoading(false)
    }

    loadStorage()
  }, [])

  async function signUp(nome: string, email: string, password: string) {
    setLoadingAuth(true)

    try {
      const response = await api.post("/users", {
        name: nome,
        email: email,
        password: password,
      })

      setLoadingAuth(false)

      navigation.goBack()

      // Removido navigation.goBack() - a navegação será feita na página SignUp
    } catch (err) {
      console.log("Erro ao cadastrar usuario: ", err)
      setLoadingAuth(false)
    }
  }

  async function signIn(email: string, password: string) {
    setLoadingAuth(true)
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      })

      const { id, name, token } = response.data

      const data = {
        id,
        name,
        token,
        email,
      }

      await AsyncStorage.setItem("@granaGo", token )
      
      api.defaults.headers["Authorization"] = `Bearer ${token}`


      setUser({
        id,
        name,
        email,
      })

      setLoadingAuth(false)
    } catch (err) {
      console.log("Erro ao fazer login: ", err)
      setLoadingAuth(false)
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
    .then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
