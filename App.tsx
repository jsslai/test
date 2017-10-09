/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react"
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native"

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.text}>Foo bar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  } as ViewStyle,
  text: {
    color: "black"
  } as TextStyle
})
