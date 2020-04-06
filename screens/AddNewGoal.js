import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';
import ModalDatePicker from 'react-native-datepicker-modal'
import {   
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

            <Text >Goal Name</Text>
            <TextInput
              style={globalStyles.formInput}
              placeholder='name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text >What daily task will you do to reach your goal?</Text>
            <TextInput
              style={globalStyles.formInput}
              multiline
              placeholder='Daily Task'
              onChangeText={props.handleChange('what')}
              value={props.values.what}
            />
            <Text >Why do you want to accomplish this goal? How will it make you better? How will you see yourself differently once you accomplish this goal?</Text>
            <TextInput 
              style={globalStyles.formInput}
              placeholder='Why'
              onChangeText={props.handleChange('why')}
              value={props.values.why}
              // keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
  );
}