import { useState, useEffect } from "react"

import { styles } from "./styles"

import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native"

import Header from "../../components/Header"

import api from "../../services/api"
import { format } from "date-fns"

import { useIsFocused } from "@react-navigation/native"
import BalanceItem from "../../components/BalanceItem"
import HistoricoList from "../../components/HistoricoList"

import Icon from "@expo/vector-icons/MaterialIcons"
import CalendarModal from "../../components/CalendarModal"

// Tipos para os dados
interface Balance {
  tag: string
  saldo: number
}

interface Movement {
  id: string
}

export default function Home() {
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState<Balance[]>([])
  const [movements, setMovements] = useState<Movement[]>([])

  const [modalVisible, setModalVisible] = useState(false)

  const [dateMovements, setDateMovements] = useState(new Date())

  useEffect(() => {
    let isActive = true

    async function getMovements() {

      let date = new Date(dateMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
      let dateFormated = format(onlyDate, "dd/MM/yyyy")

      const receives = await api.get("/receives", {
        params: {
          date: dateFormated,
        },
      })

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      })

      if (isActive) {
        setListBalance(balance.data)
        setMovements(receives.data)
      }
    }
    getMovements()

    return () => {
      isActive = false
    }
  }, [isFocused, dateMovements])

  async function handleDelete(id: string) {
    try {
      await api.delete(`/receives/delete`, {
        params: {
          item_id: id,
        },
      })
      setDateMovements(new Date())
    } catch (err) {
      console.log(err)
    }
  }

  function filterDateMovements(dateSelected: Date) {
    setDateMovements(dateSelected)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Minhas movimentações" />

      <FlatList
        style={styles.list}
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.buttonFilter}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="event" size={30} color="#EAEDF4" />
        </TouchableOpacity>
        <Text style={styles.textFilter}>Ultimas movimentações</Text>
      </View>

      <FlatList
        style={styles.list}
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )} // Corrigido: passa o item como prop
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </SafeAreaView>
  )
}
