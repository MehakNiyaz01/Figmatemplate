import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import OTPInput from "../Components/toggle";
import TabNavigator from "../Components/BottomTabNavigator";
// import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {

  // const navigation = useNavigation();
  const handleSubmit = () => {
    // Handle password submission logic here
    navigation.navigate("BottomTab");
  };
  return (
    <SafeAreaView>
    <View class="container">
      <Image source={require("../assets/otp.png")} style={styles.image} />
      <View class={styles.formContainer}>
        <Text style={styles.label}>Password</Text>
        <Text style={styles.keyText}>You have to enter your key</Text>

        <OTPInput />

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 200,

    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  submitButton: {
    backgroundColor: "#007FFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 40,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  keyText: {
    fontSize: 16,
    marginBottom: 40,
    opacity: 0.5,
  },
});

export default LoginScreen;
