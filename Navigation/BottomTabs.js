import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Dimensions, View, Text } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../Screens/Home"
import Favoris from "../Screens/Favoris"
import Playlist from "../Screens/Playlists"

const Tab = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get("screen");

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarPressColor: "transparent",
                activeTintColor: "red",
                inactiveTintColor: "#000",
                tabBarShowLabel: false,
                tabBarIndicatorStyle: [{ backgroundColor: "transparent" }],
                tabBarContentContainerStyle: [
                    { height: 120, paddingHorizontal: 10, bottom: 35 },
                ],
                tabBarStyle: [
                    {
                        backgroundColor: "#fff",
                        position: "absolute",
                        bottom: 0,
                        width,
                        height: 80,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        elevation: 20,
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab}>
                            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={focused ? "#000" : "#666"} />
                            <Text
                                style={{
                                    color: focused ? "#000" : "#666"
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
                name="Home"
                component={Home} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab}>
                            <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={focused ? "#000" : "#666"} />
                            <Text
                                style={{
                                    color: focused ? "#000" : "#666"
                                }}
                            >
                                Favoris
                            </Text>
                        </View>
                    ),
                }}
                name="Favoris"
                component={Favoris} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tab}>
                            <Ionicons name={focused ? "list" : "list-outline"} size={24} color={focused ? "#000" : "#666"} />
                            <Text
                                style={{
                                    color: focused ? "#000" : "#666"
                                }}
                            >
                                Playlists
                            </Text>
                        </View>
                    ),
                }}
                name="Playlist"
                component={Playlist} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tab: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },

});
