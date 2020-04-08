import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, CheckBox, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global.js';
import DateTimePicker from '@react-native-community/datetimepicker';import {   
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray} 
from 'formik';
import {
  TextField,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Ionicons } from '@expo/vector-icons'


export default function AddNewGoal(props) {

    // const [goals, setGoals] = useState()


  return (
    <ImageBackground
    source={require('../assets/images/white-texture.jpg')}
    style={globalStyles.homeContainer}
    >
    <View style={globalStyles.container}>

    <Formik
        initialValues={{private: false , what: '', why: '', name: '', start_date: new Date()}}
        onSubmit={(goal, actions) => {
          
          fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }, body: JSON.stringify({goal})
          }).then(resp => resp.json())
          .then(console.log)
          actions.resetForm(); 
          // addNewGoal(values);
        }}
    >
        {props => (
  
          <View>
            <View style={globalStyles.center}>
              <Text style={globalStyles.formHeaderTitle} >Woohoooo let's set a new goal!!!</Text>
            </View>
            <View >
               <Text style={globalStyles.formHeaderText} >Make this goal Public? </Text>
               <CheckBox
                  containerStyle={styles.checkBoxContainer}
                  checkedIcon='check-box'
                  iconType='material'
                  uncheckedIcon='check-box-outline-blank'
                  title='Agree to terms and conditions'
                  checkedTitle='You agreed to our terms and conditions'
                  checked={props.values.private}
                  onPress={() => setFieldValue('check', !props.values.check)}
                />
            </View>
              <Text style={globalStyles.formHeaderText}>Goal Name</Text>
              <TextInput
              style={globalStyles.formInput}
              placeholder='Goal Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={globalStyles.formHeaderText}>What daily task will you do to reach your goal?</Text>
            <TextInput
              style={globalStyles.formInput}
              multiline
              placeholder='Daily Task'
              onChangeText={props.handleChange('what')}
              value={props.values.what}
            />
            <Text style={globalStyles.formHeaderText}>Why do you want to accomplish this goal? How will it make you better? How will you see yourself differently once you accomplish this goal?</Text>
            <TextInput 
              style={globalStyles.formInput}
              placeholder='Why do you want to accomplish this goal?'
              onChangeText={props.handleChange('why')}
              value={props.values.why}
              // keyboardType='numeric'
            />
            <Text style={globalStyles.formHeaderText}>Start Date:</Text>
            <DateTimePicker 
                value={props.values.start_date} 
                onChange={props.handleChange('start_date')}
            />
            <View style={globalStyles.buttonContainer} >
            <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
            </View>
          </View>
        )}
      </Formik>

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  }
})