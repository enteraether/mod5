import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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


export default function AddNewGoal(props) {
    // const { navigation } = props
    const [date, setDate] = useState(new Date(1598051730000))

  return (
    <View style={globalStyles.container}>
    <Formik
        initialValues={{private: '', what: '', why: '', name: '', start_date: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          // addReview(values);
        }}
    >
        {props => (
  
          <View>
            <View style={globalStyles.center}>
            <Text style={globalStyles.formHeaderTitle} >Woohoooo let's set a new goal!!!</Text>
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
            <DateTimePicker value={date} />
            <View style={globalStyles.buttonContainer} >
            <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
