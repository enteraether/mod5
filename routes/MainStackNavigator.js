import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import userHome from '../screens/userHome';
import UsersIndividualGoal from '../screens/UsersIndividualGoal';
import CommunitiesPublicGoals from '../screens/CommunitiesPublicGoals';
import AddNewGoal from '../screens/AddNewGoal';
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

function MainStackNavigator() {
  return (
    

      // {/* <TabNavigator /> */}
      // <NavigationContainer>
      // <Tab.Navigator>
      //   <Tab.Screen name='CommunitiesPublicGoals' component={CommunitiesPublicGoals} />
      // </Tab.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='userHome' component={userHome} />
        <Stack.Screen name='UsersIndividualGoal' component={UsersIndividualGoal} />
        <Stack.Screen name='AddNewGoal' component={AddNewGoal} />
        <Stack.Screen name='CommunitiesPublicGoals' component={CommunitiesPublicGoals} />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// export default function TabNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default MainStackNavigator