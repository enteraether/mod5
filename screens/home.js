import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik'

export default function Home(props) {
    const { navigation } = props
    // goToLogin = () => this.props.navigation.navigate('userHome')
    // const [user, setUser] = useState()
  return (
    <View style={styles.container}>

<Formik
        initialValues={{name: '', username: '', password: ''}}
        onSubmit={(user, actions) => {
          
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }, body: JSON.stringify({user})
          }).then(resp => resp.json())
          .then(resp => {
            if (resp.errors){
              alert(resp.errors)
              } else {
              props.setUser(resp)
              }
          })
          // actions.resetForm(); 
          // addNewGoal(values);
        }}
    >
        {props => (
  
          <View style={globalStyles.container} >
            <Text style={globalStyles.titleText}>The Goal Tracking App </Text>
            
            <View style={globalStyles.loginPadding} >
            <TextInput
                name='name'
                value={props.values.name}
                onChangeText={props.handleChange('name')}
                placeholder='Enter your full name'
                style={globalStyles.formInput}
              />
              </View>

              <View style={globalStyles.loginPadding} >
              <TextInput
                name='username'
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                placeholder='Enter email'
                style={globalStyles.formInput}
              />
              </View>

              <View style={globalStyles.loginPadding} >
              <TextInput
                name='password'
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                placeholder='Enter password'
                style={globalStyles.formInput}
              />
              </View>

              <View >
                
                  <TouchableOpacity
                    style={globalStyles.buttonContainer}
                    onPress={() => navigation.navigate('userHome')}>
                  <Text style={globalStyles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={globalStyles.buttonContainer}
                    onPress={() => navigation.navigate('UsersIndividualGoal')}>
                  <Text style={globalStyles.buttonText}>SignUp</Text>
                  </TouchableOpacity>
              </View>


            <View style={globalStyles.buttonContainer} >
              <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
            </View>
          </View>
        )}
      </Formik>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: 'center'
  },
  buttonContainer: {
    margin: 25
  },
  checkBoxContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  inputContainer: {
    margin: 15
  },
})