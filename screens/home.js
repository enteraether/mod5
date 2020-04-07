import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Button, CheckBox } from 'react-native-elements'
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik'

export default function Home(props) {
    // const { navigation } = props
  return (
    <View style={styles.container}>
      <Formik
          initialValues={{
            name: '',
            username: '',
            password: '',
          }}
          onSubmit={values => {
            this.handleSubmit(values)
          }}>
            {props => (
         <View>
              <FormInput
                name='name'
                value={props.values.name}
                onChangeText={props.handleChange('name')}
                placeholder='Enter your full name'
              />
              <FormInput
                name='username'
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                placeholder='Enter email'
              />
              <FormInput
                name='password'
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                placeholder='Enter password'
              />
              <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Goal/Habit Tracking App </Text>
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
          </View>
          )};
        </Formik>
          <Button
          title='Have an account? Login'
          onPress={this.goToLogin}
          titleStyle={{
            color: '#039BE5'
          }}
          type='clear'
        />
        </View>
  )
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
  }
})
