import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from "react-native"

import Header from "./Components/Header"
import BottomTabs from "./Navigation/BottomTabs"


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <BottomTabs />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  }
})