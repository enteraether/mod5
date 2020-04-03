import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function Home(props) {
    const { navigation } = props
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Goal/Habit Tracking App </Text>
      <TouchableOpacity
        // style={styles.buttonContainer}
        onPress={() => navigation.navigate('userHome')}>
        <Text >Go to User Page</Text>
      </TouchableOpacity>
    </View>
  );
}