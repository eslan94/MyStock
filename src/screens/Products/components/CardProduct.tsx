import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../ProductsScreen'
import { TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { ModalProduct } from './ModalProduct'

interface Props{
    product: Product
}

export const CardProduct = ({product}:Props) => {

    const [showModal, setShowModa] = useState(false)

  return (
        
    <View>
            
        <TouchableOpacity onPress={()=>setShowModa(!showModal)}>
            <View style={styles.root}>
                <Image
                    source={{uri: product.pathImage}}
                    style={styles.image}/>
                <View>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                    
            </View>
                
        </TouchableOpacity>
        <ModalProduct product={product} isVisible={showModal} changeVisible={()=>setShowModa(!showModal)}/>
        </View>
  )
}

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center',
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
