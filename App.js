/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Root, Icon } from "native-base";


import LoginScreen from './containers/Login'
import BasicInfoScreen from './containers/BasicInfo'
import UploadImageScreen from './containers/UploadImage'
import OtpScreen from './containers/Otp'
import HomeScreen from './containers/Home'
import MessageScreen from './containers/Messages'
import MatchesScreen from './containers/Matches'
import ProfileScreen from './containers/Profile'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName={"Profile"}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconFocused = focused ? "#7444C0" : "#363636";  ; 

        if (route.name === 'Explore') {
          iconName = 'md-search'
         
        } else if (route.name === 'Messages') {
          iconName = 'ios-text'
        } else if (route.name === 'Matches') {
          iconName = 'md-heart'
        } else if (route.name === 'Profile') {
          iconName = 'md-contact'
        } 

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} style={{color:iconFocused, fontSize: 20}} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#7444C0',
      //inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Explore" component={HomeScreen} />
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      headerMode={"none"}>
      {/* <Stack.Screen name="UploadImage" component={UploadImageScreen} /> */}
      
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />  
      <Stack.Screen name="BottomTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export function App() {
  return (

    <Root>

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

    </Root>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
