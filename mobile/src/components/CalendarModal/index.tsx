import { useState } from "react";
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import { styles } from "./styles"

import {Calendar, LocaleConfig} from "react-native-calendars"
import { ptBr } from "./localeCalendar"

LocaleConfig.locales["pt-br"] = ptBr
LocaleConfig.defaultLocale = "pt-br"

export default function CalendarModal({setVisible, handleFilter}: {setVisible: () => void, handleFilter: (date: Date) => void}) {

  const [dateNow, setDateNow] = useState(new Date())
  const [markedDates, setMarkedDates] = useState({})

  function handleOnDayPress(date) {
    setDateNow(new Date(date.dateString))

    let markedDay = {}

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: "#AA7A24",
      textColor: "#EAEDF4",
    }

    setMarkedDates(markedDay)
  }

  function handleFilterDate(){
    handleFilter(dateNow)
    setVisible()
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}>

        </View>
      </TouchableWithoutFeedback>

      <View style={styles.content}>

        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: "#ff0000",
            selectedDayBackgroundColor: "#AA7A24",
            selectedDayTextColor: "#EAEDF4",
          }}
        />

        <TouchableOpacity style={styles.buttonFilter} onPress={handleFilterDate}>
          <Text style={styles.buttonFilterText}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}