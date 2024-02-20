import Snackbar from "react-native-snackbar";
import { Product, User } from "../navigator/StackNavigator";
import { UserForm } from '../screens/LoginScreen';
import { ERROR_COLOR } from "./constantsColor";
import { ProductForm } from "../screens/RegisterProductScreen";

export const hasErrorForm=(form: UserForm)=>{
    return form.username == '' ||form.password==''
}

export const verifyExistUser=(users: User[], form: UserForm)=>{
    return users.filter(user=>user.username==form.username)[0];
}

export const showSnackBar=(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: background,
        textColor:'white'
      });    
}

export const getIdNewUser=(users: User[])=>{
    const getIdUser=users.map(user=>user.id)
    return Math.max(...getIdUser)+1;
}

export const hasErrorFormProduct=(form: ProductForm)=>{
    return form.productname == '' ||form.price==0 || form.stock==0 || form.pathImage==''
}

export const getIdNewProduct=(products: Product[])=>{
    const getIdProduct=products.map(product=>product.id)
    return Math.max(...getIdProduct)+1;
}