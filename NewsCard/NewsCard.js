import React from "react";
import {Image, View, Text} from "react-native";
import NewsCardStyle from "./NewCard.style";

const NewsCard = ({news}) =>
{
    return(
    <View style = {NewsCardStyle.container}>
            <View style = {NewsCardStyle.inner_container}>
            <Image style = {NewsCardStyle.image} source = {{uri: news.imageUrl}}/>
            <Text style = {NewsCardStyle.title}>{news.title}</Text>
            <Text style = {NewsCardStyle.description}>{news.description}</Text>
        </View>
    </View>
    );
}

export default NewsCard;