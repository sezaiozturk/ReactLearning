import React from "react";
import { View,TouchableOpacity,Text, Alert } from "react-native";
import styles from './Card.style'

const Card=(probs)=>{
    return(
        <View style={styles.card_container} >
            <View style={styles.card_body}>
                <Text style={styles.card_title}>{probs.title}</Text>
                <Text style={styles.card_text}>{probs.text}</Text>
            </View>
            <TouchableOpacity style={styles.card_button_container} onPress={()=>{Alert.alert('Hi '+probs.title)}}>
                <Text style={styles.card_button_text}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;