import React from 'react'
import { Image, Modal, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constantsColor';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Product } from '../../../navigator/StackNavigator';

interface Props{
    product: Product;
    isVisible:boolean;
    changeVisible:()=>void;
}

export const ModalProduct = ({product, isVisible, changeVisible}:Props) => {

    const {width}=useWindowDimensions();

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
        <View style={styles.root}>
            <View style={{width: width*0.80,
                ...styles.content}}>
                <View style={styles.headerModal}>
                    <Text style={styles.title}>{product.productname}</Text>
                    <View style={styles.iconClose}>
                        <Icon name={'cancel'} size={20} color={PRIMARY_COLOR} onPress={changeVisible}/>
                    </View>
                </View>
                <View style={styles.image}>
                    <Image source={{
                        uri: product.pathImage
                    }}
                    style={{width:200, height:250}}/>
                </View>
                
            </View>
        </View>
    </Modal>
  )
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    content:{
        padding:20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,

    },
    headerModal:{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        borderStyle:'solid',
        padding:10
    },
    iconClose:{
        flex:1,
        alignItems:'flex-end'
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        color:'#000',
    },
    image:{
        alignItems:'center'
    }
})
