import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F3FF",
    borderRadius: 4,
    marginHorizontal: 10,
    marginBottom: 14,
    padding: 12,
  },
  tipoView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#673BE7",
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 4,
  },
  tipoText: {
    color: "#F0F3FF",
    fontSize: 16,
    fontStyle: "italic",
  },
  valorText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
})
