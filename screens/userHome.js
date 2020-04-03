import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';
import usersIndividualGoal from '../components/usersIndividualGoal'

export default function userHome() {

  const [userGoals, setUserGoals] = useState([
    { id: 1, private: true, why: 'bc i want to', what: 'read 15 mins/day', name: 'Reading Goal', date: '4/1/2019' }
  ])

  return (
    <View style={globalStyles.container}>
      <View>
       <Text style={globalStyles.titleText} >Welcome Back User</Text>
      </View>
      <View>
       <Text>Progress</Text>
      </View>
      <View style={globalStyles.goalContainer}>
      <View style={globalStyles.box} >
       <FlatList
          data={userGoals}
          renderItem={({ item })=> (
            <TouchableOpacity onPress={()=> navigation.navigate('usersIndividualGoal'), item } >
              <usersIndividualGoal 
                item={item}
              />
            </TouchableOpacity>
          )}
       >

       </FlatList>
      </View>
      </View>
    </View>
  );
}