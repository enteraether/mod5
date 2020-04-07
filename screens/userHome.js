
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import PrivateGoalCard from '../container/PrivateGoalCard'

export default function userHome({navigation}) {

  const [userGoals, setUserGoals] = useState()

  const addNewGoal = (goal) => {
    // goals.key = Math.random().toString();
    setReviews((currentGoals) => {
      return [goal, ...currentGoals];
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/goals").then(resp => resp.json()).then(data => setUserGoals(data))
  }, []
  )

  // console.log(Application.applicationId)

  return (
    <View style={globalStyles.containerUserHome}>
      <View>
       <Text style={globalStyles.titleText} >Welcome Back User</Text>
      </View>
      <View>
       <Text>Progress</Text>
      </View>

      <View style={globalStyles.goalContainer}>
       <FlatList
          data={userGoals}
          renderItem={({ item })=> (
            <TouchableOpacity onPress={()=> navigation.navigate('UsersIndividualGoal', {item})} style={[globalStyles.item]}>
              <View style={globalStyles.box} >
                <Text style={globalStyles.titleText} >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
       >
       </FlatList>    
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={globalStyles.buttonContainer} >
         <TouchableOpacity onPress={()=> navigation.navigate('AddNewGoal')} >
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

