import React from "react";
import { View,FlatList,Image,SafeAreaView,Text, ScrollView,StyleSheet, Dimensions} from "react-native";
import news from "./jsons/news_data.json"
import NewsCard from "./components/NewsCard";
import banner from './jsons/news_banner_data.json'

const App=()=>{

    const renderNews=({item})=><NewsCard news={item}/>
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.title}>NEWS</Text>
                <FlatList
                    ListHeaderComponent={()=>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        banner.map(banner_news=><Image style={styles.banner} source={{uri:banner_news.imageUrl}}/>)
                    }
                </ScrollView>}
                    keyExtractor={(item,index)=>item.u_id.toString()}
                    data={news}
                    renderItem={renderNews}
                />
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    banner:{
        height:Dimensions.get('window').height/5,
        width:Dimensions.get('window').width/2
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    }
})

export default App;