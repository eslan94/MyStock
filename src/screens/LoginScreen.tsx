import React, { useState } from 'react'
import { ImageComponent, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BUTTON_COLOR, ERROR_COLOR, PRIMARY_COLOR } from '../commons/constantsColor';
import { BodyComponent } from '../components/BodyComponent'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Snackbar from 'react-native-snackbar';
import { TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { hasErrorForm, showSnackBar, verifyExistUser } from '../commons/authValidation';
import { MenuScreen } from './MenuScreen';

export interface UserForm{
    username: string;
    password: string;
    hasError: boolean;
}

interface LoginProps{
    users:User[]
}

export const LoginScreen = ({users}:LoginProps) => {

    const navigation=useNavigation();

  const [form, setForm] = useState<UserForm>({
    username:'',
    password:'',
    hasError: false
  });

  const [hiddenPassword, sethiddenPassword] = useState(true)

  
  const handlerChangeText=(name: string, value: string)=>{
    
    setForm(prevState=>({
        ...prevState,
        [name]:value
    }))
    }

    
    const handlerSendInfo=()=>{
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

        const existUser=verifyExistUser(users, form)
        
        if(!existUser || existUser.password != form.password){
            showSnackBar("Usuario o contraseña incorrectos!", ERROR_COLOR)
            return;
        }
        console.log(form)
        navigation.dispatch(CommonActions.navigate({name:'MenuScreen'}));
    }


  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesión'/>
        <BodyComponent>
            <Text style={styles.textWelcome}>Bienvenido!</Text>
            <Text style={styles.textDescription}>Ingresa tus credenciales para continuar</Text>
            <View style={stylesGlobal.containerForm}>
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
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo} />   
            <TouchableOpacity onPress={()=>navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
                <Text style={stylesGlobal.textNavigation}>No tienes cuenta? Regístrate aquí</Text>
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
    
    
})
