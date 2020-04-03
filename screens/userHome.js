import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function userHome() {

  const [userGoals, setUserGoals] = useState([
    { id: 1, private: true, why: 'bc i want to', what: 'read 15 mins/day', name: 'Reading Goal', date: '4/1/2019' }
  ])

  return (
    <View style={globalStyles.container}>
      <View>
       <Text>User's Home Page</Text>
      </View>
      <View>
       <Text>Progress</Text>
      </View>
      <View>
       <FlatList
          data={userGoals}
          renderItem={({ item })=> (
            <TouchableOpacity onPress={()=> navigation.navigate('usersIndividualGoal'), item } >
              <Text style={globalStyles.titleText} >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
       >

       </FlatList>
      </View>
    </View>
  );
}