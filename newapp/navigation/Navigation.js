import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Popular from '../screens/Popular/Popular'
import TopRated from '../screens/TopRated/TopRated'
import UpComing from '../screens/Upcoming/UpComing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#223343',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Popular: {
      screen: Popular,
    },
    TopRated: {
      screen: TopRated,
    },
    UpComing: {
      screen: UpComing
    },
  },
  {
    initalRouteName: 'Popular',
    activeColor: '#f0edf6',
    inactiveColor: '#E8A317',
    barStyle: { backgroundColor: '#223343', marginTop: 60},
  }
);


export default createAppContainer(TabNavigator);
