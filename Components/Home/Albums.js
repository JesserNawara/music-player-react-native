import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { Component } from 'react'
import Album from "./Album"

const { width, height } = Dimensions.get("window");

export default function Albums() {

    const data = [
        {
            image: require('../../assets/Albums/1.jpg'),
            name: "Lamb Of God",
            artist: "Lamb Of God"
        },
        {
            image: require('../../assets/Albums/2.jpg'),
            name: "Lamb Of God 'Deluxe Edition'",
            artist: "Lamb Of God"
        },
        {
            image: require('../../assets/Albums/3.jpg'),
            name: "Ashes Of The Wake",
            artist: "Lamb Of God"
        },
        {
            image: require('../../assets/Albums/4.jpg'),
            name: "Sacrament",
            artist: "Lamb Of God"
        },
        {
            image: require('../../assets/Albums/5.jpg'),
            name: "New American Gospel",
            artist: "Lamb Of God"
        },
    ]

    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}
            >Albums</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Album image={item.image} name={item.name} artist={item.artist} />
                )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 280,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingHorizontal:15,
    }
})