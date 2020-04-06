import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';

export default function AddNewGoal({navigation}) {
    // const { navigation } = props
  return (
    <View style={globalStyles.container}>
<Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.formInput}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />

            <TextInput
              style={globalStyles.formInput}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />

            <TextInput 
              style={globalStyles.formInput}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>

      {/* <Text style={globalStyles.titleText}>User's Individ Goal </Text>
      <Text style={globalStyles.titleText}>____ Consecutive Days Practicing Goal </Text>
      <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text>
      <Text style={globalStyles.titleText}>Log Today's Progress </Text>
      <Text style={globalStyles.titleText}>____ Total Days Practicing Goal </Text> */}


    </View>
  );
}