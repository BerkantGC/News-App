import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const NewsCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        marginTop: 5,
        marginHorizontal: 7,
        height: Dimensions.get('window').height / 4, 
    },
    inner_container: {
        borderColor: 'purple',
        borderRadius: 5,
        borderWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 7,
        marginTop: 5,
        marginBottom: 5,
    },
    description: {
        marginHorizontal: 7,
        fontSize: 14,
        marginBottom: 5,
    }
})

export default NewsCardStyle;