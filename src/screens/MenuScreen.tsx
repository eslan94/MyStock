import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {LinkComponent} from '../components/LinkComponent'

export const MenuScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.logo} source={require('../images/LogoProductos.png')}/>
            <LinkComponent title='Productos' onPress={()=>navigation.navigate('ProductsScreen')}/>
        </View>
        <View>
            <Image style={styles.logo} source={require('../images/LogoClientes.png')} />
            <LinkComponent title='Clientes' onPress={()=>navigation.navigate('SuppliersScreen')}/>
        </View>
        <View>
            <Image style={styles.logo} source={require('../images/LogoProveedor.png')}/>
            <LinkComponent title='Proveedores' onPress={()=>navigation.navigate('SuppliersScreen')}/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf:'center',
        marginVertical: 30,
      },
      texto:{
        marginLeft:20,
        fontSize: 20,
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center'
      },
})
