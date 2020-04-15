import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import { globalStyles } from '../styles/global.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Home(props) {
    const { navigation } = props
    // goToLogin = () => this.props.navigation.navigate('userHome')
    // const [user, setUser] = useState()

    const reviewSchema = yup.object({
      name: yup.string()
        .required()
        .min(2),
      username: yup.string()
        .required()
        .min(3),
      password: yup.string()
        .required()
        .min(3),
    });

  return (
    <ImageBackground
      source={require('../assets/images/white-texture.jpg')}
      style={globalStyles.homeContainer}
      >
    
    
    <View >

    <Formik
        initialValues={{name: '', username: '', password: ''}}
        validationSchema={reviewSchema}
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
            }
          )
          // actions.resetForm(); 
          // addNewGoal(values);
        }}
    >
        {props => (
  
          <View  >

            <View style={globalStyles.center}>
              <View style={globalStyles.homePagePadding}>
              <Text style={globalStyles.homePageHeader}>The Goal Tracking App </Text>
              </View>
            </View>

            <View style={globalStyles.spaceBtElements}></View>
            
            <View style={globalStyles.loginPadding} >
            <TextInput
                name='name'
                value={props.values.name}
                onChangeText={props.handleChange('name')}
                placeholder='Enter your full name'
                style={globalStyles.formInput}
                onBlur={props.handleBlur('name')} 
              />
              <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
              </View>

              <View style={globalStyles.loginPadding} >
              <TextInput
                name='username'
                value={props.values.username}
                onChangeText={props.handleChange('username')}
                placeholder='Enter username'
                style={globalStyles.formInput}
                onBlur={props.handleBlur('username')}
              />
              <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>
              </View>

              <View style={globalStyles.loginPadding} >
              <TextInput
                name='password'
                secureTextEntry
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                placeholder='Enter password'
                style={globalStyles.formInput}
                onBlur={props.handleBlur('password')} 
              />
              <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
              </View>

              <View >
                
                  <TouchableOpacity
                    style={globalStyles.buttonContainerHome}
                    onPress={() => navigation.navigate('userHome')}>
                  <Text style={globalStyles.buttonText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={globalStyles.buttonContainerHome}
                    onPress={() => navigation.navigate('UsersIndividualGoal')}>
                  <Text style={globalStyles.buttonText}>SignUp</Text>
                  </TouchableOpacity>
              </View>


            {/* <View style={globalStyles.buttonContainer} >
              <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
            </View> */}
          </View>
        )}
      </Formik>
    </View>
    </ImageBackground>
    
  );
}

