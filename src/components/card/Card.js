import React from "react";
import { View,TouchableOpacity,Text, Alert } from "react-native";
import styles from './Card.style'

const Card=(props)=>{
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>Alert.alert('Hi '+props.title)}>
                <Text style={styles.button_title}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;