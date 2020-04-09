import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { CheckBox } from 'react-native-elements'
import * as yup from 'yup';
import { Formik } 
from 'formik';


export default function UsersIndividualGoal(props) {
    
    console.log(props.route.params.item)

    const [note, setNote] = useState()

    let first = props.route.params.item.start_date
    console.log(first)

  //   function datediff(first, second) {

  //     return Math.round((second-first)/(1000*60*60*24));
  // }

      ////// fix this review schema
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
        <View >

          <View style={globalStyles.center} >
            <Text style={globalStyles.titleText}>{props.route.params.item.name}</Text>
          </View>

          <Text style={globalStyles.formHeaderText}> ____ Consecutive Days Practicing Goal </Text>

          <Text style={globalStyles.formHeaderText}> ____ Total Days Practicing Goal </Text>



          <Formik
              initialValues={{count: 1, goal_id: 1 }}
              //// fix this validation schema
              validationSchema={reviewSchema}
              onSubmit={(count, actions) => {
          
                fetch("http://localhost:3000/goals", {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }, body: JSON.stringify({count})
                }).then(resp => resp.json())
                .then(console.log)

                // add validation so they can't submit this form more than once per day

                // if they submit a yes then put confetti on the screen

                // .then(actions.resetForm() )

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

                      <CheckBox
                          // containerStyle={styles.checkBoxContainer}
                          checkedIcon='check-box'
                          iconType='material'
                          uncheckedIcon='check-box-outline-blank'
                          // title='Agree to terms and conditions'
                          checkedTitle='You agreed to our terms and conditions'
                          checked={props.values.counter}
                          onPress={() => props.setFieldValue('counter', !props.values.counter)}
                      />

                      <View style={globalStyles.buttonContainer} >
                          <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
                      </View>
                    </View>
          )} 
          </Formik>

          <Formik
              initialValues={{note: '', date: new Date(), goal_id: 1 }}
              //// fix this validation schema
              validationSchema={reviewSchema}
              onSubmit={(note, actions) => {
          
                fetch("http://localhost:3000/notes", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }, body: JSON.stringify({note})
                }).then(resp => resp.json())
                .then(console.log)
                .then(actions.resetForm() )
                // .then()
                
                // addNewGoal(values);
              }}
              >
              {props => (
                    <View>
            

                      <Text style={globalStyles.formHeaderText}>Today's Notes/Reflections</Text>
                        <TextInput
                          style={globalStyles.formInput}
                          placeholder=""
                          onChangeText={props.handleChange('note')}
                          value={props.values.note}
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

            <Text style={globalStyles.formHeaderText}>  </Text>
          </View>

        </View>


  
  );
}

// Yo! I also love space! If you ever wanna talk black holes or gravitational waves, hit me up!