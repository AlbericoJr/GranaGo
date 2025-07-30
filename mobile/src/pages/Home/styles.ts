import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A202C',
    paddingTop: 20,
  },
  list: {
    maxHeight: 190,
    flex: 1,
    backgroundColor: "#1A202C",
    marginBottom: 22,
  },
  filter:{
    marginTop: 0,
    backgroundColor: "#2D3748",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    
    paddingHorizontal: 14,
    paddingVertical: 7,
    alignItems: "center",
  },
  buttonFilter:{
  },
  textFilter:{
    marginLeft: 4,
    color: "#EAEDF4",
    marginBottom: 14,
    fontWeight: "bold",
    fontSize: 18,
  },
})