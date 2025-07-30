import { View, Text, TouchableWithoutFeedback, Alert } from "react-native"
import { styles } from "./style"

import Icon from "react-native-vector-icons/Feather"

export default function HistoricoList({ data, deleteItem }) {
  function handleDeleteItem(){
    Alert.alert("Remover", "Deseja remover esse item?", 
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onPress={handleDeleteItem}>
      <View style={styles.container}>
        <View style={styles.tipoView}>
          <View
            style={[
              styles.iconView,
              {
                backgroundColor:
                  data.type === "despesa" ? "#FF4C4C" : "#673BE7",
              },
            ]}
          >
            <Icon
              name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              size={20}
              color="#EAEDF4"
            />
            <Text style={styles.tipoText}>{data.type}</Text>
          </View>
        </View>
        <View style={styles.valorText}>
          <Text style={styles.valorText}>R$ {data.value}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
