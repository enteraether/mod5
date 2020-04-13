import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Button,TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { CheckBox } from 'react-native-elements'
import * as yup from 'yup';
import { Formik } 
from 'formik';


export default function UsersIndividualGoal(props) {
    
  const [status, setStatus] = useState(false);

  const [userComments, setUserComments] = useState()


  useEffect(() => {
    fetch(`http://localhost:3000/goals/${props.route.params.item.id}`)
    .then(resp => resp.json())
    .then(goal => {
      console.log(goal.comments)
        setUserComments(goal.comments)
          }
        )
    }, []
  )
// console.log(userComments)
  // console.log(props.route.params.item.id)

  // const comments = () => {
  //   return userComments.map(comment=>{
  //     return <Text>{comment['comment']}</Text>
  //   })
  // } 

    let first = props.route.params.item.start_date
    console.log(first)

  //   function datediff(first, second) {

  //     return Math.round((second-first)/(1000*60*60*24));
  // }

      ////// fix this review schema
      // add note inside
      const goalCountReviewSchema = yup.object({
        counter: yup.boolean().oneOf([true], 'Please check the agreement')
      });

      const noteReviewSchema = yup.object({
        note: yup.string()
          .required('Gotta have a note to hit submit')
      });
    
  return (
    <ImageBackground
    source={require('../assets/images/white-texture.jpg')}
    style={globalStyles.homeContainer}
    >
        <View >

          <View style={globalStyles.center} >
            <Text style={globalStyles.titleText}>{props.route.params.item.name}</Text>
          </View>

          {/* <Text style={globalStyles.formHeaderText}> ____ Consecutive Days Practicing Goal </Text> */}

          <Text style={globalStyles.formHeaderText}> {props.route.params.item.counter}: Total Days Practicing Goal </Text>



          <Formik
              initialValues={{counter: false }}
              //// fix this validation schema
              validationSchema={ goalCountReviewSchema }
              onSubmit={(values, actions) => {
                if (values['counter'])
                  {fetch("http://localhost:3000/goals/3", {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json"
                    }, body: JSON.stringify({values})
                  }).then(resp => resp.json())}
          else {
                // make alert here 
          }
                // .then(console.log)

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

                    <Text style={globalStyles.errorText}>{props.touched.counter && props.errors.counter}</Text>


             

                      <View style={globalStyles.buttonContainer} >
                          <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
                      </View>
                    </View>
          )} 
          </Formik>

          <Formik
              initialValues={{note: '', date: new Date(), goal_id: 1 }}
              //// fix this validation schema
              validationSchema={noteReviewSchema}
              onSubmit={(note, actions) => {
          
                fetch("http://localhost:3000/notes/1", {
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

                        <Text style={globalStyles.errorText}>
                          {props.touched.note && props.errors.note}
                        </Text>

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

            {/* <Text>{comments()}</Text> */}

            <Text style={globalStyles.formHeaderText}>  </Text>
          </View>

        </View>

  </ImageBackground>
  
  );
}

// Yo! I also love space! If you ever wanna talk black holes or gravitational waves, hit me up!