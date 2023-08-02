import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // or 'react-native-vector-icons/Feather'

const OTPInput = ({ length = 6 }) => {
  const [otp, setOTP] = useState(new Array(length).fill(''));
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const inputRefs = new Array(length);

  const handleChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    if (index < length - 1 && text !== '') {
      inputRefs[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].focus();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <View
          key={index}
          style={[
            styles.inputLine,
            {
              borderColor: digit ? '#000' : '#ccc',
            },
          ]}
        >
          <TextInput
            ref={(ref) => (inputRefs[index] = ref)}
            style={styles.input}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            value={digit}
            keyboardType={isPasswordVisible ? 'default' : 'numeric'}
            maxLength={1}
            secureTextEntry={!isPasswordVisible}
          />
        </View>
      ))}
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
        <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLine: {
    width: 40,
    height: 2,
    borderBottomWidth: 2,
    marginHorizontal: 5,
  },
  input: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: -40,
    left: 0,
    fontSize: 20,
  
   
  
  },
  toggleButton: {
    marginLeft: 10,
    borderWidth:1,
    borderRadius:5
  },
});

export default OTPInput;
