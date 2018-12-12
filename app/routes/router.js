import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import HomeScreen from '../screens/home.screen';
import CategoriesScreen from '../screens/categories.screen';
import RequestsScreen from '../screens/requests.screen';
import MyRequestsScreen from '../screens/myrequests.screen';

let screen = Dimensions.get('window');

export const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Categories: {
        screen: CategoriesScreen,
    },
    Requests: {
        screen: RequestsScreen,
    },
    MyRequests: {
        screen: MyRequestsScreen,
    },
}, {
    initialRouteName: 'Home',
});