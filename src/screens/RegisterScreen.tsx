import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { stylesGlobal } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler';
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { User } from '../navigator/StackNavigator';
import { getIdNewUser, hasErrorForm, showSnackBar, verifyExistUser } from '../commons/authValidation'
import { ERROR_COLOR } from '../commons/constantsColor'
import { useNavigation } from '@react-navigation/native'

interface UserForm{
    username: string;
    password: string;
    hasError: boolean;
}

interface RegisterProps{
    usersLogin:User[];
    setUsersLogin:(user:User)=>void
}

export const RegisterScreen = ({usersLogin, setUsersLogin}:RegisterProps) => {

    const navigation= useNavigation()

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

        const handlerSaveUser=()=>{
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

            const existUser=verifyExistUser(usersLogin, form)
            if(existUser){
                showSnackBar('Usuario ya registrado', ERROR_COLOR)
                return;
            }

            const newUser:User={
                id: getIdNewUser(usersLogin),
                ...form
            }

            setUsersLogin(newUser)
            showSnackBar('Registro Exitoso', 'green')
            navigation.goBack();
        }


  return (
    <View>
        <TitleComponent title='Regístrate'/>
        <BodyComponent>
            <View style={stylesGlobal.containerForm}>
                <Text style={stylesGlobal.textPrincipal}>Estás muy cerca</Text>
                <Text style={stylesGlobal.textDescription}>Ingresa tus datos</Text>
                <InputComponent 
                    placeholder='Usuario' 
                    name={'username'} 
                    onChangeText={handlerChangeText} 
                    hasError={form.hasError}/>
                <InputComponent
                    placeholder='Contraseña'
                    name={'password'}
                    onChangeText={handlerChangeText}
                    isPassword={hiddenPassword}
                    hasICon={true}
                    actionIcon={()=>sethiddenPassword(!hiddenPassword)}
                    hasError={form.hasError}
                />     
            </View>   
            <ButtonComponent title='Registrar' onPress={handlerSaveUser}/>
            <TouchableOpacity onPress={()=>navigation.goBack}>
                <Text style={stylesGlobal.textNavigation}>Ya tienes una cuenta? Inicia sesión aquí</Text>
            </TouchableOpacity>
        </BodyComponent>
    </View>
  )
}
