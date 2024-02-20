import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, View } from 'react-native'
import { BodyComponent } from '../components/BodyComponent'
import { PRIMARY_COLOR } from '../commons/constantsColor'
import { ButtonComponent } from '../components/ButtonComponent'
import {stylesGlobal} from '../theme/appTheme'


export const HomeScreen = ({navigation}:any) => {
    

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Image style={stylesGlobal.logo} source={require('../images/logo.png')}/>
        <ButtonComponent title='INGRESAR' onPress={()=>navigation.navigate('LoginScreen')}/>             
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})