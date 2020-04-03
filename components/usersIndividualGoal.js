import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function Home(props) {
    const { navigation } = props
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>User's Individ Goal </Text>
      <Text style={globalStyles.titleText} >
                {item.name}
              </Text>
    </View>
  );
}