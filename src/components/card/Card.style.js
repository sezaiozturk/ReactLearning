import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
      card_button_container:{
        backgroundColor:'#00C2FF',
        padding:10,
        alignItems:"center",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
      },
      card_button_text:{
        color:'white',
        fontSize:18,
        fontWeight:"bold"
      }
})