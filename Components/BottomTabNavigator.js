import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/MainScreen";
// const Tab = createBottomTabNavigator();

// // const HomeScreen = () => (
// //   <View>
// //     <Text>Home Screen</Text>
// //   </View>
// // );

// // const AddViewScreen = () => (
// //   <View>
// //     <Text>Add View Screen</Text>
// //   </View>
// // );

// // const WalletScreen = () => (
// //   <View>
// //     <Text>Wallet Screen</Text>
// //   </View>
// // );

// // const EarningsScreen = () => (
// //   <View>
// //     <Text>Earnings Screen</Text>
// //   </View>
// // );

// // const MoreScreen = () => (
// //   <View>
// //     <Text>More Screen</Text>
// //   </View>
// // );

// const TabNavigator = () => (
//         <NavigationContainer>
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="AddView"
//       component={LoginScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="plus" size={size} color={color} />
//         ),
//       }}
//     />
//     {/* <Tab.Screen
//       name="Wallet"
//       component={WalletScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="credit-card" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Earnings"
//       component={EarningsScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="money" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="More"
//       component={MoreScreen}
//       options={{
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="ellipsis-h" size={size} color={color} />
//         ),
//       }}
//     /> */}
//   </Tab.Navigator>
//         </NavigationContainer>
// );

// export default TabNavigator;
const Tab = createBottomTabNavigator();


const AddViewScreen = () => (
    <View>
      <Text>Add View Screen</Text>
    </View>
  );


  const WalletScreen = () => (
    <View>
      <Text>Wallet Screen</Text>
    </View>
  );

  const EarningsScreen = () => (
    <View>
      <Text>Earnings Screen</Text>
    </View>
  );


  const MoreScreen = () => (
    <View>
      <Text>More Screen</Text>
    </View>
  );



const TabNavigator = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Wallet") {
              iconName = focused ? "wallet" : "wallet-outline";
            } else if (route.name === "Earning") {
              iconName = focused ? "cash" : "cash-outline";
            }
            
            else if (route.name === "More") {
                iconName = focused ? "menu" : "menu-outline";
              }
              else if (route.name === "AddView") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#007FFF",
          inactiveTintColor: "gray",
          
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddView" component={AddViewScreen } />
        <Tab.Screen name="Wallet" component={WalletScreen} /> 
        <Tab.Screen name="Earning" component={EarningsScreen} /> 
        <Tab.Screen name="More" component={ MoreScreen} /> 

      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigator;
