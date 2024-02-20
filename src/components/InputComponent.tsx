import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { INPUT_COLOR, PRIMARY_COLOR } from '../commons/constantsColor'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface InputProps{
    placeholder: string;
    name: string;
    onChangeText: (name: string, value: string)=>void;
    isPassword?: boolean;
    hasICon?:boolean;
    actionIcon?:()=>void;
    hasError:boolean
}

export const InputComponent = ({placeholder, name, onChangeText, isPassword=false,hasICon=false, actionIcon=()=>{}, hasError}:InputProps) => {
  return (
        <View>
            <TextInput
            placeholder={placeholder}
            keyboardType='default'
            style={(hasError)
                ?{...styles.inputText, ...styles.error}
                :{...styles.inputText}}
            onChangeText={(value: string)=>onChangeText(name, value)}
            secureTextEntry={isPassword}/>

            {
                (hasICon)
                ?<Icon 
                style={styles.icon} 
                name='visibility' 
                size={20} 
                color={PRIMARY_COLOR}
                onPress={actionIcon}/>
                :null
            }

            {
                (hasError)
                ?<Text style={styles.errorText}>El campo es obligatorio</Text>
                :null
            }
        </View>
        
  )
}
const styles=StyleSheet.create({
    inputText:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,
        borderColor:'blue',
        marginVertical:10,
        
    },
    error:{
        borderColor:'red',
        borderStyle:'solid',
        borderWidth:1
    },
    errorText:{
        color:'red',
        fontSize:14,
        fontWeight:'bold'
    },
    icon:{
        position: 'absolute',
        right:20,
        marginTop:23,
    },
})
