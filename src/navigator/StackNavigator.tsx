import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constantsColor';
import { HomeScreen } from '../screens/HomeScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { ProductsScreen } from '../screens/Products/ProductsScreen';
import { CustomersScreen } from '../screens/CustomersScreen';
import { SuppliersScreen } from '../screens/SuppliersScreen';
import { RegisterProductScreen } from '../screens/RegisterProductScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';

//Data prueba
export interface User{
  id:number,
  username: string,
  password: string
}

const users:User[]=[
  {id:1, username:'ecalvopiña', password:'12345'},
  {id:2, username:'lvinueza', password:'54321'}
]

//Data Productos de prueba

export interface Product{
  id: number;
  name: string;
  price:number;
  stock: number;
  pathImage: string;
}

const products=[
  {id:1, name: 'Arroba Arroz Macareño', price: 14.50, stock:7, pathImage:'https://corpamecuador.com/tienda/img/p/7/6/76-home_default.jpg'},
  {id:2, name: 'Arroba Arroz Gallito', price: 12.50, stock:6, pathImage:'https://cdn.shopify.com/s/files/1/0522/1299/0152/products/PicsArt_04-04-07.17.22.jpg?v=1617538844&width=750'},
  {id:3, name: 'Azucar Valdez 2kg', price: 2.40, stock:10, pathImage:'https://provexecuador.com/wp-content/uploads/2022/10/7861049300024.jpg'},
  {id:4, name: 'Sal CrisSal 2kg', price: 2.20, stock:9, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/100223_G.jpg'},
  {id:5, name: 'Café Buen Día 20gr', price: 1.00, stock:12, pathImage:'https://fortalezasuper.com.ec/wp-content/uploads/2022/11/CAFE-BUENDIA-SACHET-20GR-scaled.jpg'},
  {id:6, name: 'Café NesCafe 25gr', price: 1.00, stock:12, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/63073_G.jpg'},
  {id:7, name: 'Servilletas Familia AcolchaMax Normal', price: 1.25, stock:10, pathImage:'https://web.superboom.net/web/image/product.template/31931/image_512/%5B000679%5D%20Servilletas%20Familia%20Acolchamax%20Normal%20200%20Unidades?unique=2944adc'},
  {id:8, name: 'Papel Higiénico Familia TriplePlus', price: 1.00, stock:15, pathImage:'https://images.ctfassets.net/tcoigcjw85h2/1lNuYD0ypiGCsk65oNLLVG/8748c13d7ab80cd5ce0318e76dc6970b/ph-triple-plus-2-en-1-x3-interna.png'},
  {id:9, name: 'Esponja para patos Vileda', price: 0.90, stock:12, pathImage:'https://kywiec.vtexassets.com/arquivos/ids/183171/505154.jpg?v=638388689913400000'},
  {id:10, name: 'Guantes Multiuso Master', price: 1.30, stock:5, pathImage:'https://amcecuador.com/wp-content/uploads/2021/03/Guante-master-multiuso-c22.png'},
  {id:11, name: 'Té Horchata Hornimans', price: 1.50, stock:8, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/174404460_G.jpg'},
  {id:12, name: 'Ricacao 140gr', price: 1.00, stock:6, pathImage:'https://distribuidorariofrio.com/wp-content/uploads/2022/03/ricacao-150gr-1.jpg'},
]



const Stack = createStackNavigator();

export const StackNavigator=()=> {

  const [usersLogin, setUsersLogin]=useState(users);
  const [productsStock, setProductsStock]=useState(products)

  const handlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }

  const handlerAddProduct=(product: Product)=>{
    setProductsStock([...productsStock, product])
  }

  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor: PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name='HomeScreen' options={{headerShown:false}} component={HomeScreen}/>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} children={()=><LoginScreen users={usersLogin}/>} />
      <Stack.Screen name='RegisterScreen' options={{headerShown:false}} children={()=><RegisterScreen usersLogin={usersLogin} setUsersLogin={handlerAddUser}/>}/>
      <Stack.Screen name='MenuScreen' options={{headerShown:false}} component={MenuScreen}/>
      <Stack.Screen name='ProductsScreen' options={{headerShown:false}} children={()=><ProductsScreen products={productsStock}/>}/>
      <Stack.Screen name='CustomersScreen' options={{headerShown:false}} component={CustomersScreen}/>
      <Stack.Screen name='SuppliersScreen' options={{headerShown:false}} component={SuppliersScreen}/>
      <Stack.Screen name='RegisterProductScreen' options={{headerShown:false}} children={()=><RegisterProductScreen productsStock={productsStock} setProductsStock={handlerAddProduct}/>}/>
    </Stack.Navigator>
  );
}
