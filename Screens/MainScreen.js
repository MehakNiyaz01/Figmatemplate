import React from 'react';
import { View, Text, TextInput,SafeAreaView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons'; // Import appropriate icons

import TabNavigator from '../Components/BottomTabNavigator';
const HomeScreen = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.profileIcon}>
          <FontAwesome name="user-circle" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.greetingText}>Hello Viewers</Text>
        <TouchableOpacity style={styles.bellIcon}>
          <FontAwesome name="bell" size={30} color='#007FFF'/>
        </TouchableOpacity>
        
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#ccc"
          />
          <Feather name="search" size={24} color='#007FFF'style={styles.searchIcon} />
        </View>
      </View>
      
      <View style={styles.emptyCard} />
    
      {/* Tab Navigator */}
      {/* <TabNavigator/> */}
      {/* Include your tab navigation component here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
 
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,

    paddingTop: StatusBar.currentHeight + 20, // Adjust for status bar height
  },
  topBar: {
  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
 
    width:'100%'
  },
  profileIcon: {
    // Customize your profile icon styles
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bellIcon: {
    // Customize your bell icon styles
  
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    width:"100%",
  },
  searchInput: {
    flex: 1,

    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  emptyCard: {
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginBottom: 20,
 backgroundColor:"lightgrey"
  },
});

export default HomeScreen;
