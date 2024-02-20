import { StyleSheet } from "react-native";
import { BUTTON_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constantsColor";

export const stylesGlobal=StyleSheet.create({
    logo:{
        width:200,
        height:200,
    },
    textPrincipal:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10
    },
    textNavigation:{
        color:BUTTON_COLOR,
        fontSize:15,
        marginTop:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    content:{
        padding:20,
        backgroundColor:SECONDARY_COLOR,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        fontSize:17,
        fontWeight:'bold',
        color:'#000'
    },
    
})