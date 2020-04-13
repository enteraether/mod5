import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, Button, SafeAreaView, TextInput, } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import * as yup from 'yup';
import {   
  Formik,
} 
from 'formik';

export default function CommunitiesPublicGoals(props) {

  const [like, setLike] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [userGoals, setUserGoals] = useState()

  const likeImage = () => {
		setLike(!like)
	}

  const colorValue = like ? '#fb7777' : '#fff'


  useEffect(() => {
    fetch("http://localhost:3000/goals/")
    .then(resp => resp.json())
    .then(goals => {
      // console.log(goals)
      goals.map(goal=>{
        console.log(goal.private)
        if (!goal.private) {
          setUserGoals(goal, ...setUserGoals)
          }
        })
      }
    )
    }, []
  )

  // const comments = () => {
  //   return userComments.map(comment=>{
  //     return <Text>{comment['comment']}</Text>
  //   })
  // } 

//  console.log(props.route.params.userGoals)
    // const { navigation } = props

    // const comments = () => {
    //   return props.route.params.userGoals.map(goal=>{
    //      goal.comments.map(comment=>{
    //       return <Text>{comment['comment']}</Text>
    //     })
    //   })
    // } 


  return (

    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Communities Public Goals </Text>


      <View style={globalStyles.goalContainer}>
       <FlatList
          // data={props.route.params.userGoals}
          data={userGoals}
          renderItem={({ item })=> (
            // console.log(item)
            // if (!item.private) {
              <View style={globalStyles.item} >
              <View style={globalStyles.box} >
                <ImageBackground
                    source={require('../assets/images/white-texture.jpg')}
                    style={{    
                      height: 200,
                      width: 300,
                    }}
                >
                  <View style={globalStyles.center} >

                  {/* {!item.private ? <Text style={globalStyles.formHeaderTitle} >{item.name} </Text> : null } */}

                    <Text style={globalStyles.formHeaderTitle} >
                        {item.name}
                    </Text>

                        <TouchableOpacity
                          onPress={likeImage}
                        >
                          <Ionicons name="md-heart" size={35} color={colorValue} />
                        </TouchableOpacity>
                    <View>
                      <Text> {item.what} </Text>
                    </View>
                    <View>
                      {/* {comments()} */}
                      {/* {item.comments ? <Text> {comments()} </Text> : null 
                      } */}
                        <View >
                          <Button title="Send Comment" onPress={() => setModalOpen(true)} />
                          <Modal 
                              visible={modalOpen}
                              backdropColor="#694141"
                              backdropOpacity={.9}
                              >     
                            <View >
                          
                              <Formik
                    initialValues={{comment: '', goal_id: item.id, user_id: 1}}
                    //// fix this validation schema
                    // validationSchema={reviewSchema}
                    onSubmit={(comment, actions) => {
                      
                      fetch(`http://localhost:3000/comments`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          "Accept": "application/json"
                        }, body: JSON.stringify({comment})
                      }).then(resp => resp.json())
                      // .then(console.log)
                      actions.resetForm(); 
                      // goToLogin = () => navigation.navigate('userHome')
                      setModalOpen(false);
                    }}
                >
                    {props => (
              
                      <View>
                        <View style={globalStyles.center}>
                          <Text style={globalStyles.formHeaderTitle} >Connect / Send an encouraging word!</Text>
                        </View>
                        <View >            
                        </View>

                        <TextInput 
                          style={globalStyles.formInput}
                          placeholder='Comment'
                          onChangeText={props.handleChange('comment')}
                          value={props.values.comment}
                          // keyboardType='numeric'
                        />


                        <View style={globalStyles.buttonContainer} >
                        <Button  color='white' title="Submit" onPress={props.handleSubmit} /> 
                        </View>
                      </View>
                    )}
                  </Formik>
                              
      <View >
            
            <Button title="Close" onPress={() => setModalOpen(false)} />
          </View>
                              
                            </View>
                          </Modal>
                        </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            
            </View>
          // }
          )}
       >
       </FlatList>    
       </View>
            
            


      {/* <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => props.navigation.navigate('userHome')}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => props.navigation.navigate('userHome')}>
        <Text style={globalStyles.buttonText}>SignUp</Text>
      </TouchableOpacity> */}
    </View>
  );
}
