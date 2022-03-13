import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Album({ image, name, artist }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                resizeMode="cover"
                style={{
                    height: 120,
                    width: 180,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 10
                }}
            />
            <Text
                style={{
                    fontWeight: "500",
                    color: "#fff"
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "700",
                    marginTop: 10,
                    color: "#fff"
                }}
            >
                {artist}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 13,
        justifyContent: 'center',
        alignItems: 'center',
    }
})