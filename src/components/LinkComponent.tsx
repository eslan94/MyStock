import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BUTTON_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/constantsColor'

interface LinkProps{
    title:string;
    onPress: ()=>void;
}

export const LinkComponent = ({title, onPress}:LinkProps) => {
  return (
    <TouchableOpacity
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    
    buttonText:{
        textAlign:'center',
        color:SECONDARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    }
})