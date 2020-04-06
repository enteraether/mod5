
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import PrivateGoalCard from '../container/PrivateGoalCard'

export default function userHome({navigation}) {

  const [userGoals, setUserGoals] = useState()

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
      {/* {userGoals.map(goal => <PrivateGoalCard goal={goal} key={goal.id} navigation={navigation} />)} */}
      {/* <ScrollView> */}
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
       {/* </ScrollView> */}
      </View>

      <View style={globalStyles.buttonContainer} >
         <TouchableOpacity onPress={()=> navigation.navigate('AddNewGoal')} >
              <Text style={globalStyles.buttonText} >
                Add New Goal
              </Text>
 
          </TouchableOpacity>
      </View>

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
