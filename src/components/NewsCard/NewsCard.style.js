import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:'white',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10

    },
    image:{
        height:Dimensions.get('window').height/1.5,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:3
    },
    description:{
        fontSize:14
    },
    inner_container:{
        margin:10
    },
    author:{
        textAlign:'right'
    }
})