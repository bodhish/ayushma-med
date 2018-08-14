// export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { text: "Add your med name", time: 1 };
  //   this.saveInput = this.saveInput.bind(this);
  // }

  // saveInput(event) {
  //   perviousValue = this.state.time;
  //   Alert.alert('You tapped the button!');
  //   this.setState({ time: perviousValue + 1 });
  // }
//   render() {
//     return (
//       <View style={styles.app__root}>
//         <View style={styles.app__headder}>
//           <Text
//             style={{
//               fontSize: 20
//             }}
//           >
//             Test
//           </Text>
//         </View>

        // <ScrollView style={styles.app__body}>
        //   {/* {
        //     <Image
        //       source={require("./res/logo.png")}
        //       style={styles.app__headerLogo}
        //     />
        //   } */}
        //   <Text
        //     style={{
        //       fontSize: 20
        //     }}
        //   >
        //     {this.state.text},{this.state.time}
        //   </Text>
        //   <View style={styles.app__cards}>
        //     <TextInput
        //       style={{ height: 40, margin: 5 }}
        //       onChangeText={text => this.setState({ text })}
        //       value={this.state.text}
        //     />
        //     <View style={styles.app__buttonView}>
        //       <Button
        //         onPress={this.saveInput}
        //         style={styles.app__button}
        //         title="Morning"
        //       />
        //       <Button
        //         onPress={this.saveInput}
        //         style={styles.app__button}
        //         title="Noon"
        //       />
        //       <Button
        //         onPress={this.saveInput}
        //         style={styles.app__button}
        //         title="Night"
        //       />
        //     </View>
        //   </View>
        //   <View style={styles.app__cards} />
        //   <View style={styles.app__cards} />
        //   <View style={styles.app__cards} />
        //   <View style={styles.app__cards} />
        // </ScrollView>
//         <View style={styles.app__footer} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   app__root: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   app__headder: {
//     flex: 1,
//     backgroundColor: "#27885f",
//     maxHeight: 100
//   },
//   app__body: { flex: 4, flexDirection: "column", backgroundColor: "#fff" },
//   app__footer: {
//     flex: 1,
//     maxHeight: 80,
//     backgroundColor: "#27885f"
//   },
//   app__headderLogo: { height: 1, width: 1 },
//   app__cards: {
//     height: 150,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 5,
//     marginBottom: 5,
//     backgroundColor: "#ecebeb",
//     maxHeight: 200,
//     borderColor: "#fff",
//     borderWidth: 0,
//     borderRadius: 5,
//   },
//   app__buttonView: {
//     marginLeft: 20,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     maxHeight: 40,
//     maxWidth: 250
//   },  app__button: {
//     backgroundColor: "#27885f",
//     width: 40,
//     height: 40,
//     borderColor: "#fff",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginLeft: 10,
//     marginRight: 10,
// //   }
// // });
// <Button
//               title="Go to Details"
//               onPress={() => {
//                 /* 1. Navigate to the Details route with params */
//                 this.props.navigation.navigate("AddReminder", {
//                   itemId: 86,
//                   otherParam: "anything you want here"
//                 });
//               }}
//             />