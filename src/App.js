import React from "react";
import {View,Text,SafeAreaView, Button,TouchableOpacity,StyleSheet, ScrollView} from "react-native";
import Card from './components/card'

const App=()=>{

  const hello=()=>{console.log('hello react native')};

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Card title="Sezai Öztürk" text="I am learn react native"/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0'
  }
})
export default App;