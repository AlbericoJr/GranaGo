import { useState } from "react"
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native"

import { styles } from "./styles"

import Header from "../../components/Header"
import { RegisterTypes } from "../../components/RegisterTypes"

import api from "../../services/api"
import { format } from "date-fns"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../routes/types"

export default function New() {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>()

  const [labelInput, setLabelInput] = useState("")
  const [valueInput, setValueInput] = useState("")
  const [type, setType] = useState("receita")

  function handleSubmit() {
    Keyboard.dismiss()

    if (!labelInput || isNaN(parseFloat(valueInput)) || !type) {
      alert("Preencha todos os campos")
      return
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - valor: ${parseFloat(valueInput)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    )
  }

  async function handleAdd() {
    Keyboard.dismiss()
    try {
      await api.post("/receive", {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), "dd/MM/yyyy"),
      })
      setLabelInput("")
      setValueInput("")
      navigation.navigate("Home")
      Alert.alert("Sucesso", "Registro adicionado com sucesso!")
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o registro.")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Registrando" />

        <SafeAreaView style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Descrição do registro"
            value={labelInput}
            onChangeText={setLabelInput}
          />

          <TextInput
            style={styles.input}
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={setValueInput}
          />

          <RegisterTypes
            type={type}
            sendTypeChange={(item: string) => setType(item)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  )
}
