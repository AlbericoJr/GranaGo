import { styles } from "./styles"
import { SafeAreaView, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  title: string
}

export default function Header({title}: Props) {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.buttonMenu}
      >
        <Icon name="menu" size={35} color="#EAEDF4" />
      </TouchableOpacity>

      {
        title && (
          <Text style={styles.title}>{title}</Text>
        )
      }
    </SafeAreaView>
  )
}