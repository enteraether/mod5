import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/home';
// import userHome from '../screens/userHome';
// import UsersIndividualGoal from '../screens/UsersIndividualGoal';
import CommunitiesPublicGoals from '../screens/CommunitiesPublicGoals';


const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='CommunitiesPublicGoals' component={CommunitiesPublicGoals} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
