import React, { useState } from 'react'
import { ImageComponent, StatusBar, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent'
import { BUTTON_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../commons/constantsColor';
import { BodyComponent } from '../../components/BodyComponent'
import { InputComponent } from '../../components/InputComponent'
import { ButtonComponent } from '../../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { stylesGlobal } from '../../theme/appTheme';
import { Customer, Product, StackNavigator } from '../../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CardCustomer } from './components/CardCustomer';


interface CustomersProps{
    customers:Customer[]
}

export const CustomersScreen = ({customers}:CustomersProps) => {

    const navigation=useNavigation();


  return (
    
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Clientes'/>
        <BodyComponent>
            <View style={styles.btnAgregar}>
            <Icon name='add-circle'size={50} color={BUTTON_COLOR} onPress={()=>navigation.dispatch(CommonActions.navigate({name: 'RegisterProductScreen'}))}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={customers}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item})=><CardCustomer customer={item}/>}/>   
            </View>
                   
                       
        </BodyComponent>
    </View>
  )
}

const styles=StyleSheet.create({
    textWelcome:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    },
    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10
    },
    container:{
        flexDirection:'row'

    },
    btnAgregar:{
        marginBottom:15,
        position:'absolute',
        right:10,  
        bottom:1 
    },
    btnText:{
        textAlign:'center',
        color:SECONDARY_COLOR,
        fontSize:30,
        fontWeight:'bold'
    }
})

