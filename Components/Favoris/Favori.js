import { View, Text,StyleSheet,Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");

export default function Favori({ image, name, artist }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Image source={image}
          style={{
              height: 50,
              width: 50,
              borderRadius: 5,
          }}
          />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: width-80,
        alignSelf:"center",
        marginVertical:15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"red"
    }
})