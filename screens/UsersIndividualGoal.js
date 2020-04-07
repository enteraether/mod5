import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
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

export default function UsersIndividualGoal(props) {
    
    // console.log(props.route.params)

    const [note, setNote] = useState()

    
  return (
        <View >

          <View style={globalStyles.center}  >
            <Text style={globalStyles.titleText}>{props.route.params.item.name}</Text>
          </View>

          <Text style={globalStyles.titleText}>{props.route.params.item.name} Consecutive Days Practicing Goal </Text>

          <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text>

          <View>
            <Text style={globalStyles.titleText}>Log Today's Progress </Text>
            <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text>
          </View>

          <Formik
              initialValues={{notes: '', completed: ''}}
              onSubmit={(values, actions) => {
                actions.resetForm(); 
                // addReview(values);
              }}
              >
              {props => (
                    <View>
                      <View style={globalStyles.center} >
                      <Text style={globalStyles.titleText}>Log Today's Progress</Text>
                      </View>

                      <View >
                      <Text style={globalStyles.formHeaderText}>Daily Task Done?</Text>
                      </View>

                      <Text style={globalStyles.formHeaderText}>Today's Notes/Reflections</Text>
                        <TextInput
                          style={globalStyles.formInput}
                          placeholder=""
                          onChangeText={props.handleChange('notes')}
                          value={props.values.notes}
                        />

                    <View style={globalStyles.buttonContainer} >
                        <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
                    </View>
                    </View>
          )} 
          </Formik>

        </View>


  
  );
}