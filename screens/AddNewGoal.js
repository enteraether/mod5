import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';
import {   
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray} 
from 'formik';
import {
  TextField,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem
} from "@material-ui/core";

create_table "goals", force: :cascade do |t|
t.integer "likes"
t.boolean "private"
t.string "what"
t.string "why"
t.string "name"
t.datetime "start_date"
t.bigint "user_id", null: false
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false
t.index ["user_id"], name: "index_goals_on_user_id"
end

export default function AddNewGoal(props) {
    // const { navigation } = props
  return (
    <View style={globalStyles.container}>
    <Formik
        initialValues={{private: '', what: '', why: '', name: '', start_date: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          // addReview(values);
        }}
    >
        {props => (
  
          <View>
            <Text >Goal Name</Text>
            <TextInput
              style={globalStyles.formInput}
              placeholder='name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text >What daily task will you do to reach your goal?</Text>
            <TextInput
              style={globalStyles.formInput}
              multiline
              placeholder='Daily Task'
              onChangeText={props.handleChange('what')}
              value={props.values.what}
            />
            <Text >Why do you want to accomplish this goal? How will it make you better? How will you see yourself differently once you accomplish this goal?</Text>
            <TextInput 
              style={globalStyles.formInput}
              placeholder='Why'
              onChangeText={props.handleChange('why')}
              value={props.values.why}
              // keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
  );
}