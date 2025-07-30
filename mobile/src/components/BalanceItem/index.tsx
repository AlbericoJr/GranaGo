import { useMemo } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export default function BalanceItem({data}){

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return {
        label: "Saldo atual",
        color: "DBFD82"
      }
    }else if(data.tag === 'receita'){
      return {
        label: "Entradas de hoje",
        color: "11AA22"
      }
    }else{
      return {
        label: "Saídas de hoje",
        color: "FFC7E0"
      }
    }

  }, [data])

  return (
    <View style={[styles.container, {backgroundColor: `#${labelName.color}`}]} >
      <Text style={styles.tag}>{labelName.label}</Text>
      <Text style={styles.value}>R$ {data.saldo}</Text>
    </View>
  )
}