import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles=StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor: colors.flue,
        justifyContent:"center",
        alignItems:"center",
    
    },
    editModalContainer:{
        backgroundColor:colors.bgWhite,
        width:"80%",
        padding:20,
        borderRadius:5,
      
    },
    title:{
        color:colors.bgBlack,
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"

    },
    modalWrapper:{
        flexDirection:"row",
        justifyContent:"center",
        gap:20
    },
    closeTouch:{
        borderWidth:1,
        padding:8,
        
    },
    confirmTouch:{
        color:colors.bgWhite,
        backgroundColor:colors.bgBlack,
        padding:8
    },
    ErrorMes:{
        color:colors.danger,
        paddingBottom:10
    }
})

export default styles