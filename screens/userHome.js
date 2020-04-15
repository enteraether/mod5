
import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, FlatList, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global.js';
import PrivateGoalCard from '../container/PrivateGoalCard'

export default function userHome({navigation}) {

  // console.log(props.route.params)
  const [userGoals, setUserGoals] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/users/16")
    .then(resp => resp.json())
    .then(data => {
        setUserGoals(data.goals)
          }
        )
    }, []
  )

  const updateGoalState = (resp) => {
    setUserGoals(...userGoals, resp)
  }

  return (
    <View style={globalStyles.containerUserHome}>
      <View style={globalStyles.center} >
        <View style={globalStyles.userHomeTitleBox} >
       <Text style={globalStyles.titleText} >Welcome Back, Theresa!</Text>
       </View>
      </View>
      <View style={globalStyles.center} >
       <Text></Text>
      </View>

      <View style={globalStyles.goalContainer}>
       <FlatList
          data={userGoals}
          renderItem={({ item })=> (
            
            <TouchableOpacity onPress={()=> navigation.navigate('UsersIndividualGoal', {item, userGoals, setUserGoals})} style={globalStyles.item}>
              <View style={globalStyles.box} >
                <ImageBackground
                source={require('../assets/images/white-texture.jpg')}
                style={{    
                  height: 200,
                  width: 300,}}>
                <View style={globalStyles.center} >
                  <View style={globalStyles.cardMargin} >
                      <Text style={globalStyles.formHeaderTitle} >
                         {item.name}
                      </Text>
                  </View>
                  </View>
                <View style={globalStyles.center} >
                  <Text  >
                    {item.counter} Days
                  </Text>
                </View>
                  <Text style={globalStyles.loginPadding} >
                    Your What: {item.what}
                  </Text>
                  <Text  style={globalStyles.loginPadding}>
                    Your Why: {item.why}
                  </Text>
                  
                </ImageBackground>
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
         <TouchableOpacity onPress={()=> navigation.navigate(('CommunitiesPublicGoals'), {userGoals}) } >
              <Text style={globalStyles.buttonText} >
                Browse Other User's Goals
              </Text>
 
          </TouchableOpacity>
      </View>
     
    </View>
  );
}

