import React from 'react';

import { 
  View, 
  Text,
  Image,
  FlatList,
  SafeAreaView, 
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';

import news_data from './components/Datas/news_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import news_banner_data from './components/Banners/news_banner_data.json';

const App = () => {

  console.log(news_banner_data[1])

  const renderNews = ({item}) => <NewsCard news={item} />
  return(
    <SafeAreaView style = {BackStyle.container}>
      <View>
        <Text style={BackStyle.header_text}>NEWS</Text>
        <FlatList 
          ListHeaderComponent={() => (
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
            {
              news_banner_data.map(bannerNews => <Image style = {BackStyle.banner_image} source={{uri: bannerNews.imageUrl}}/>)
            }
          </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()}
          data = {news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
  );
}

const BackStyle = new StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
  header_text: {
    fontFamily: 'notoserif',
    fontSize: 40, 
    color: 'lightslategrey',
    textAlign: 'center'
  }
})

export default App;
