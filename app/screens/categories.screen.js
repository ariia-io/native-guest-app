import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class CategoriesScreen extends Component {
  render() {
    return (
      <ImageBackground  source={require('../assets/images/background-london.png')} style={styles.background}>
        <Text style={styles.title}>Categories Screen</Text>
        <Button
          title="My Requests"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'MyRequests' })
              ],
            }))
          }}
        />
        <Button
          title="Service Request"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Requests' })
              ],
            }))
          }}
        />
        <Button
          title="Hotel Information"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Requests' })
              ],
            }))
          }}
        />
        <Button
          title="Offers"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Requests' })
              ],
            }))
          }}
        />        
        <Button
          title="Reviews"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Requests' })
              ],
            }))
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
  }
});