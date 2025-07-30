import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A202C',
    alignItems: 'center',
    paddingTop: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#EAEDF4',
  },
  name:{
    fontSize: 24,
    marginBottom: 24,
    color: '#EAEDF4',
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 0,
  },
  newLink:{
    backgroundColor: '#AA7A24',
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  newLinkText:{
    fontSize: 18,
    color: '#EAEDF4',
    fontWeight: 'bold',
  },
  logoutButton:{
    width: '90%',
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8977FF',
  },
  logoutButtonText:{
    fontSize: 18,
    color: '#8977FF',
    fontWeight: 'bold',
  }
})