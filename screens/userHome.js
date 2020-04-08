
import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, FlatList, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import PrivateGoalCard from '../container/PrivateGoalCard'

export default function userHome({navigation}) {

  const [userGoals, setUserGoals] = useState()

  // const addNewGoal = (goal) => {
  //   // goals.key = Math.random().toString();
  //   setGoals((currentGoals) => {
  //     return [goal, ...currentGoals];
  //   });
  // };

  useEffect(() => {
    fetch("http://localhost:3000/goals").then(resp => resp.json()).then(data => setUserGoals(data))
  }, []
  )


  return (
    <View style={globalStyles.containerUserHome}>
      <View style={globalStyles.center} >
       <Text style={globalStyles.titleText} >Welcome Back, Theresa</Text>
      </View>
      <View style={globalStyles.center} >
       <Text></Text>
      </View>

      <View style={globalStyles.goalContainer}>
       <FlatList
          data={userGoals}
          renderItem={({ item })=> (
            <TouchableOpacity onPress={()=> navigation.navigate('UsersIndividualGoal', {item})} style={globalStyles.item}>
              <View style={globalStyles.box} >
                <ImageBackground
                source={require('../assets/images/watercolor.jpg')}
                style={globalStyles.homeContainer}>

                <Text style={globalStyles.titleText} >
                  {item.name}
                </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
       >
       </FlatList>    
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={globalStyles.buttonContainer} >
         <TouchableOpacity onPress={()=> navigation.navigate('AddNewGoal') } >
              <Text style={globalStyles.buttonText} >
                Add New Goal
              </Text>
          </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>

      <View style={globalStyles.buttonContainer} >
         <TouchableOpacity onPress={()=> navigation.navigate('CommunitiesPublicGoals')} >
              <Text style={globalStyles.buttonText} >
                Browse Other User's Goal-Habits
              </Text>
 
          </TouchableOpacity>
      </View>
     
    </View>
  );
}

