import React, { useState } from 'react'
import { ImageComponent, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { BUTTON_COLOR, ERROR_COLOR, PRIMARY_COLOR } from '../../commons/constantsColor';
import { BodyComponent } from '../../components/BodyComponent'
import { InputComponent } from '../../components/InputComponent'
import { ButtonComponent } from '../../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Snackbar from 'react-native-snackbar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../../navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { getIdNewProduct, hasErrorForm, hasErrorFormProduct, showSnackBar, verifyExistProduct } from '../../commons/authValidation';

export interface ProductForm{
    productname: string;
    price: number;
    stock: number;
    pathImage: string; 
    hasError: boolean;
}

interface RegProductProps{
    productsStock:Product[];
    setProductsStock:(product:Product)=>void
}


export const RegisterProductScreen = ({productsStock, setProductsStock}:RegProductProps) => {

    const navigation=useNavigation()

  const [form, setForm] = useState<ProductForm>({
    productname:'',
    price: 0,
    stock: 0,
    pathImage:'',
    hasError: false
  });

   const handlerChangeText=(name: string, value: string)=>{
    
    setForm(prevState=>({
        ...prevState,
        [name]:value
    }))
    }

    
    const handlerSaveProduct=()=>{
        if(hasErrorFormProduct(form)){
            setForm(prevState=>({
                ...prevState,
                hasError:true
            }))
            return;
        }

        setForm(prevState=>({
            ...prevState,
            hasError:false
            
        }))

        const existProduct=verifyExistProduct(productsStock, form)
        if(existProduct){
            showSnackBar('Producto ya registrado', ERROR_COLOR)
            return;
        }

        const newProduct:Product={
            id: getIdNewProduct(productsStock),
            ...form
        }

        setProductsStock(newProduct)
        showSnackBar('Producto Agregado','green')
        navigation.goBack();
        

        
        console.log(form)
    }

    

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Agregar nuevo producto'/>
        <BodyComponent>
            <View style={styles.containerForm}>
            <InputComponent placeholder='Producto' name='productname' onChangeText={handlerChangeText} hasError={form.hasError}/>
            <InputComponent placeholder='Precio' name='price' onChangeText={handlerChangeText} hasError={form.hasError}/>
            <InputComponent placeholder='Cantidad' name='stock' onChangeText={handlerChangeText} hasError={form.hasError}/>
            <InputComponent placeholder='URL Imagen' name='pathImage' onChangeText={handlerChangeText} hasError={form.hasError}/>
            </View>  
            <ButtonComponent title='Registrar' onPress={handlerSaveProduct} />

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
    
    textRegister:{
        color: BUTTON_COLOR,
        fontSize:15,
        marginTop:20,
        fontWeight:'bold',
        textAlign: 'center'
    }
})
