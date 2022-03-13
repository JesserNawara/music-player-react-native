import { View,StyleSheet,ScrollView ,Text } from 'react-native'
import React from 'react'

import Albums from "../Components/Home/Albums"
import Genres from "../Components/Home/Genres"


export default function Home() {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={styles.container}>
      <Albums />
      <Genres />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#666",
  }
})