import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function IndividualPublicGoal() {
    
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