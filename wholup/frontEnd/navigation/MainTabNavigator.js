import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { View, Button } from 'react-native';

import AccountScreen from '../screens/AccountScreen';
// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SearchScreen from '../screens/SearchScreen';
import FollowingScreen from '../screens/FollowingScreen';







var Nav = createBottomTabNavigator({
  AccountStack: AccountScreen,
  SearchStack: SearchScreen,
  FollowingStack: FollowingScreen,
});

export default createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUpScreen,
  Nav:Nav,
});
























// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });
//
// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
//
// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });
//
// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
//     />
//   ),
// };
//
// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };
//
// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });
