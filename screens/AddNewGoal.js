import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';

export default function AddNewGoal({navigation}) {
    // const { navigation } = props
  return (
    <View >

      <Text style={globalStyles.titleText}>User's Individ Goal </Text>
      <Text style={globalStyles.titleText}>____ Consecutive Days Practicing Goal </Text>
      <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text>
      <Text style={globalStyles.titleText}>Log Today's Progress </Text>
      <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text>
      {/* <Text style={globalStyles.titleText} >
                {props.route.params.item.name}
              </Text> */}

    </View>
  );
}