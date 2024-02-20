import React, { useState } from 'react'
import { ImageComponent, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BUTTON_COLOR, ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor';
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Snackbar from 'react-native-snackbar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Product } from '../navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { hasErrorForm } from '../commons/authValidation';

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

    
    const handlerSaveInfo=()=>{
        if(hasErrorForm(form)){
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
        

        
        console.log(form)
    }

    

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
            <Text style={styles.textWelcome}>Bienvenido de nuevo!</Text>
            <Text style={styles.textDescription}>Ingresa tus credenciales para continuar</Text>
            <View style={styles.containerForm}>
            <InputComponent placeholder='Usuario' name='username' onChangeText={handlerChangeText} hasError={form.hasError}/>
                <InputComponent 
                    placeholder='Contraseña' 
                    name='password' 
                    onChangeText={handlerChangeText}
                    isPassword={hiddenPassword}
                    hasICon={true}
                    actionIcon={()=>sethiddenPassword(!hiddenPassword)}
                    hasError={form.hasError}/>
                
            </View>  
            <ButtonComponent title='Iniciar Sesión' onPress={()=>navigation.navigate('MenuScreen')} />   
            <TouchableOpacity>
                <Text style={styles.textRegister}>No tienes cuenta? Regístrate aquí</Text>
            </TouchableOpacity>

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
