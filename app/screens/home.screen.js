import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    let pic = {
        uri: 'https://www.myhai.com/wp-content/uploads/thegem-logos/logo_ff35552bf4f929b049585d5641751d18_1x.png'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.logo} />
        <Text style={styles.title}>
          Welcome to Ariia.
        </Text>
        <Button
          title="Enter"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Categories' })
              ],
            }))
          }}
        />
      </View>
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
  logo: {
    width: 300,
    height: 110,
  },
});