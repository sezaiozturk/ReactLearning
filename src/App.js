import React from "react";
import {View,Text,SafeAreaView, Button,TouchableOpacity,StyleSheet, ScrollView} from "react-native";
import Card from "./components/Card";

const App=()=>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      <Card title='Sezai ÖZTÜRK' text='React-Native Learning'/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,backgroundColor:'#e0e0e0'
  }
})
export default App;