import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

class LoginScreen extends Component {
  render() {
    return (
     <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.container}>
        <View style={styles.logTextContainer}>
          <Text style={styles.logText}>Log in</Text>
        </View>
        <View>
          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.forgotpass}>Forgot password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otherContainer}>
          <Text style={styles.dontHave}>Don't have an account?</Text>
          <Text style={styles.SignUp}>Sign up</Text>
        </View>
      </View>
     </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginTop:100,
  },
  logText: {
    fontSize: 50,
    color: "#5100ad",
  },
  logTextContainer: {
    marginBottom: 50,
  },
  input: {
    borderBottomColor: "#5100ad",
    borderBottomWidth: 2,
    height: 50,
    fontSize: 20,
    marginTop: 20,
  },
  forgotpass: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8",
  },
  buttonContainer: {
    marginVertical: 50,
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  otherContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dontHave: {
    marginRight: 10,
    fontSize: 16,
  },
  SignUp: {
    fontSize: 16,
    color: "#5100ad",
  },
});

export default LoginScreen;
