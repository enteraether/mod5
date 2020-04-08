  
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  formHeaderText: {
    fontSize: 18,
    color: '#333',
    padding: 5,
    paddingTop: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  formHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  containerUserHome: {
    flex: 1,
    padding: 20,
    paddingBottom: 300,
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  box: {
    height: 200,
    width: 300,
    backgroundColor: "#9e8d9f",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  goalContainer: {
    // flex: 1,
    // backgroundColor: "#e2e2e2",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#FFFFFF"
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  loginPadding: {
    padding: 10,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  homeContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    marginTop: 10
  },
 
});

