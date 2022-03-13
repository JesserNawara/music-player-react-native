import { View, StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'

import Favori from "../Components/Favoris/Favori"

export default function Favoris() {

  const data = [
    {
      image: require('../assets/Albums/1.jpg'),
      name: "Lamb Of God",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/2.jpg'),
      name: "Lamb Of God 'Deluxe Edition'",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/3.jpg'),
      name: "Ashes Of The Wake",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/4.jpg'),
      name: "Sacrament",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/5.jpg'),
      name: "New American Gospel",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/1.jpg'),
      name: "Lamb Of God",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/2.jpg'),
      name: "Lamb Of God 'Deluxe Edition'",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/3.jpg'),
      name: "Ashes Of The Wake",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/4.jpg'),
      name: "Sacrament",
      artist: "Lamb Of God"
    },
    {
      image: require('../assets/Albums/5.jpg'),
      name: "New American Gospel",
      artist: "Lamb Of God"
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={  ({ item }) => (
        <Favori image={item.image} name={item.name} artist={item.artist}/>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#666"
  }
})