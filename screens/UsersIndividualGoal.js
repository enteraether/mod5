import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../styles/global.js";
import { CheckBox } from "react-native-elements";
import * as yup from "yup";
import { Formik } from "formik";
import ConfettiCannon from "react-native-confetti-cannon";


export default function UsersIndividualGoal(props) {
  console.log(props.route.params.userGoals[0]);
  

  const [status, setStatus] = useState(false);

  const MyComponent = () => (
    <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
  );

  // const [userComments, setUserComments] = useState()

  // useEffect(() => {
  //   fetch(`http://localhost:3000/goals/${props.route.params.item.id}`)
  //   .then(resp => resp.json())
  //   .then(goal => {
  //     console.log(goal.comments)
  //       setUserComments(goal.comments)
  //         }
  //       )
  //   }, []
  // )
  // console.log(userComments)
  // console.log(props.route.params.item.comments)

  const comments = () => {
    return props.route.params.item.comments.map((comment) => {
      return <Text>{comment["comment"]}</Text>;
    });
  };

  ////// fix this review schema
  // add note inside
  const goalCountReviewSchema = yup.object({
    counter: yup.boolean().oneOf([true], "Please check the agreement"),
  });

  const noteReviewSchema = yup.object({
    note: yup.string().required("Gotta have a note to hit submit"),
  });

  return (
    <ImageBackground
      source={require("../assets/images/white-texture.jpg")}
      style={globalStyles.homeContainer}
    >
      <View>
        <View style={globalStyles.center}>
          <View style={globalStyles.topOfPagePadding}>
            <Text style={globalStyles.userIndividGoalHeader}>
              {props.route.params.item.name}
            </Text>
          </View>
        </View>

        {/* <Text style={globalStyles.formHeaderText}> ____ Consecutive Days Practicing Goal </Text> */}
        <View style={globalStyles.center}>
          <Text style={globalStyles.formHeaderText}>
            !!! {props.route.params.item.counter} Day Streak !!!{" "}
          </Text>
        </View>

        <Formik
          initialValues={{ counter: false }}
          //// fix this validation schema
          validationSchema={goalCountReviewSchema}
          onSubmit={(values, actions) => {
            if (values["counter"]) {
              fetch(
                `http://localhost:3000/goals/${props.route.params.item.id}`,
                {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({ values }),
                }
              )
                .then((resp) => resp.json())
                .then(alert("You Rock! Awesome work today!"))
                .then(()=> {
                  let newGoals = props.route.params.userGoals.map(goal => {
                    if (goal.id === props.route.params.item.id) {
                      return {
                        ...goal, counter: goal.counter+1
                      }
                      
                      // props.route.params.item
                      // console.log('############ ', goal)
                    }
                    else {return goal}
                  })
                  props.route.params.setUserGoals(newGoals)
                  props.navigation.navigate('userHome')
                })

                // .then(actions.resetForm(!counter))
                .then(MyComponent());
            }

            // .then(console.log)

            // add validation so they can't submit this form more than once per day

            // if they submit a yes then put confetti on the screen

            // .then(actions.resetForm() )
          }}
        >
          {(props) => (
            <View>
              <View style={globalStyles.center}>
                <View style={globalStyles.spaceBtElementsUserIndividGoal}>
                  <Text style={globalStyles.titleText}>
                    Log Today's Progress
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={globalStyles.formHeaderText}>
                  Daily Task Done?{" "}
                </Text>

                <CheckBox
                  // containerStyle={styles.checkBoxContainer}
                  checkedIcon="check-box"
                  iconType="material"
                  uncheckedIcon="check-box-outline-blank"
                  // title='Agree to terms and conditions'
                  checkedTitle="You agreed to our terms and conditions"
                  checked={props.values.counter}
                  onPress={() =>
                    props.setFieldValue("counter", !props.values.counter)
                  }
                />
              </View>
              <Text style={globalStyles.errorText}>
                {props.touched.counter && props.errors.counter}
              </Text>

              <View style={globalStyles.center}>
                <View style={globalStyles.buttonContainerSmall}>
                  <Button
                    color="white"
                    title="Submit"
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>

        <Formik
          initialValues={{
            note: "",
            date: new Date(),
            goal_id: props.route.params.item.id,
          }}
          //// fix this validation schema
          validationSchema={noteReviewSchema}
          onSubmit={(note, actions) => {
            fetch(`http://localhost:3000/notes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({ note }),
            })
              .then((resp) => resp.json())
              .then(console.log)
              .then(actions.resetForm());
            // .then()

            // addNewGoal(values);
          }}
        >
          {(props) => (
            <View>
              <View style={globalStyles.center}>
                <Text style={globalStyles.formHeaderText}>
                  Today's Notes/Reflections
                </Text>
              </View>
              <TextInput
                style={globalStyles.formInput}
                placeholder=""
                onChangeText={props.handleChange("note")}
                value={props.values.note}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.note && props.errors.note}
              </Text>
              <View style={globalStyles.center}>
                <View style={globalStyles.buttonContainerSmall}>
                  <Button
                    color="white"
                    title="Submit"
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>

        <View>
          <View style={globalStyles.center}>
            <Text style={globalStyles.titleText}>Comments</Text>
          </View>

          {/* style={globalStyles.item} */}
          {/* <View style={globalStyles.flex} >  */}
          <FlatList
            data={props.route.params.item.comments}
            renderItem={({ item }) => (
              //  console.log(item)

              <View style={globalStyles.center}>
                <View>
                  <View style={globalStyles.cardMargin}>
                    <Text style={globalStyles.formHeaderText}>
                      {item.comment}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          ></FlatList>
          {/* </View> */}
          {/* <Text>{comments()}</Text> */}

          <Text style={globalStyles.formHeaderText}> </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

// Yo! I also love space! If you ever wanna talk black holes or gravitational waves, hit me up!
