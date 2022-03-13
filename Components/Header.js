import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");


export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    marginHorizontal: 15
                }}
            >
                <Ionicons name="notifications-outline" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    marginHorizontal: 15
                }}
            >
                <Ionicons name="musical-notes-outline" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    marginHorizontal: 15
                }}
            >
                <Ionicons name="settings-outline" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
    }
})