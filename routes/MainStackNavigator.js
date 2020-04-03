// import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   ReviewDetails: {
//     screen: ReviewDetails,
//   },
// };

// // home stack navigator screens
// const HomeStack = createStackNavigator(screens);

// export default NavigationContainer(HomeStack);

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home';
import userHome from '../screens/userHome';
import usersIndividualGoal from '../components/usersIndividualGoal';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='userHome' component={userHome} />
        <Stack.Screen name='usersIndividualGoal' component={usersIndividualGoal} />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator