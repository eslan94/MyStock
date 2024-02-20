import React, { useState } from 'react'
import { Customer } from '../../../navigator/StackNavigator'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
    customer:Customer
}

export const CardCustomer = ({customer}:Props) => {
    
  return (
    <View>
        <View style={styles.root}>
            <Text style={styles.title}>{customer.name} {customer.lastname}</Text>
            <Text style={styles.title}>{customer.phone}</Text>
            <Text style={styles.title}>{customer.address}</Text>
        </View>        
    </View>
  )
}

const styles=StyleSheet.create({
    root:{
        padding:10,
        borderStyle:'solid',
        borderColor:'ccc',
        borderWidth:1,
        borderRadius:10,
        marginBottom:15
    },
    title:{
        fontWeight:'bold',
        color:'#000',
        fontSize:15
    },
    image:{
        width:75,
        height:75,
    }
})