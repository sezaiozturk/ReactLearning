import React from "react";
import {View,Text,SafeAreaView, Button,TouchableOpacity,StyleSheet} from "react-native";

const App=()=>{

  const hello=()=>{console.log('hello react native')};

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}> Sezai ÖZTÜRK</Text>
          <Text style={styles.card_text}> React native tasarım çalışıyorum</Text>
        </View>
        <TouchableOpacity style={styles.button_container}>
          <Text style={styles.button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0'
  },
  card_container:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10,
    margin:10
  },
  card_body:{
    padding:10
  },
  card_title:{
      fontSize:18,
      fontWeight:"bold",
      margin:10,
      marginBottom:8
  },
  card_text:{
      fontSize:15,
      margin:10,
      marginTop:8

  },
  button_container:{
    backgroundColor:'#00C2FF',
    padding:10,
    alignItems:"center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  button_text:{
    color:'white',
    fontSize:18,
    fontWeight:"bold"
  }
})
export default App;