import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A202C',
  },
  loginContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 25,
    width: 200,
    height: 200,
  },
  inputContainer:{
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 17,
    padding: 10,
    borderRadius: 8,
    color: '#121212',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 8,
    backgroundColor: '#C59B2D',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#F5F7FA',
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: '#F5F7FA',
  },
})