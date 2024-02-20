import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BUTTON_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constantsColor'

interface ButtonProps{
    title:string;
    onPress: ()=>void;
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor: BUTTON_COLOR,
        padding: 15,
        borderRadius:30,
        marginHorizontal:40,
        marginVertical:25,
    },
    buttonText:{
        textAlign:'center',
        color:SECONDARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    }
})