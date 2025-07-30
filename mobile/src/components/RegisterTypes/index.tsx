import { styles } from "./styles"
import { useState } from "react"

import { Text, TouchableOpacity, View } from "react-native"
import Feather from "@expo/vector-icons/Feather"

export const RegisterTypes = ({ type, sendTypeChange }) => {
  const [typeChecked, setTypeChecked] = useState(type)

  function changeType(name) {
    if (name === "receita") {
      setTypeChecked("receita")
      sendTypeChange("receita")
    } else {
      setTypeChecked("despesa")
      sendTypeChange("despesa")
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: typeChecked === "receita" ? "#673BE7" : "#a8a8a8",
          },
        ]}
        onPress={() => changeType("receita")}
      >
        <Feather name="arrow-up" size={25} color="#F5F7FA" />
        <Text style={styles.text}>Receita</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: typeChecked === "despesa" ? "#673BE7" : "#a8a8a8",
          },
        ]}
        onPress={() => changeType("despesa")}
      >
        <Feather name="arrow-down" size={25} color="#F5F7FA" />
        <Text style={styles.text}>Despesa</Text>
      </TouchableOpacity>
    </View>
  )
}
