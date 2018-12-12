import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import FlatListMyRequests from "../components/myrequests.flatlist"

export default class MyRequestsScreen extends Component {
  render() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>My Requests</Text>
        <FlatListMyRequests></FlatListMyRequests>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});