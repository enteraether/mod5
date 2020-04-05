import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';
import UsersIndividualGoal from './UsersIndividualGoal'

export default function userHome({navigation}) {

  const [userGoals, setUserGoals] = useState([
    { id: 1, private: true, why: 'bc i want to', what: 'read 15 mins/day', name: 'Reading Goal', date: '4/1/2019' },
    { id: 2, private: true, why: 'bc i want to', what: 'study french 15 mins/day', name: 'Language Goal', date: '3/1/2019' }
  ])

  console.log(navigation)

  return (
    <View style={globalStyles.container}>
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

