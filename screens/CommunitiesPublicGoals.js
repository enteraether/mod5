import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function CommunitiesPublicGoals(props) {
    const { navigation } = props
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Communities Public Goals </Text>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('userHome')}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('userHome')}>
        <Text style={globalStyles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}