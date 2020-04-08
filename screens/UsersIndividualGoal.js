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
    
    console.log(props.route.params.item)

    const [note, setNote] = useState()

    
  return (
        <View >

          <View style={globalStyles.center}  >
            <Text style={globalStyles.titleText}>{props.route.params.item.name}</Text>
          </View>

          <Text style={globalStyles.formHeaderText}>15 Consecutive Days Practicing Goal </Text>

          <Text style={globalStyles.formHeaderText}>25 Total Days Practicing Goal </Text>

          <Formik
              initialValues={{notes: '', completed: false}}
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

          <View>
            <View style={globalStyles.center}>
             <Text style={globalStyles.titleText}>Comments</Text>
            </View>

            <Text style={globalStyles.formHeaderText}> > Yo! I also love space! If you ever wanna talk black holes or gravitational waves, hit me up! </Text>
          </View>

        </View>


  
  );
}