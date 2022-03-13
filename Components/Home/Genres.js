import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Genre from "./Genre"

export default function Genres() {

    const data= [
        {
            image: require('../../assets/genres/1.jpg'),
            name: "Rock"
        },
        {
            image: require('../../assets/genres/2.jpg'),
            name: "Jazz"
        },
        {
            image: require('../../assets/genres/3.jpg'),
            name: "Pop"
        },
        {
            image: require('../../assets/genres/4.jpg'),
            name: "Indie"
        },
    ]

  return (
    <View style={styles.container}>
      <Text
        style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom:10
        }}
        >Genres</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data= {data}
        keyExtractor={item => item.id}
        renderItem={  ({ item }) => (
            <Genre image={item.image} name={item.name}/>
        )
        }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding:20,
        marginBottom: 120,
    }
})