import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";
import Todo from "./index.js"

const styles=StyleSheet.create({
    todoWrapper:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:colors.textSecondry,
        margin:10,
        flexDirection:"row",
        alignItems:"center",


    },
  
    title:{
        fontWeight:"bold",
        color:colors.bgBlack,
        fontSize:25

    },
    completedTitle:{
        color: colors.danger,
        textDecorationLine: "line-through",
     

    },
    date:{
        fontWeight:"bold",
        color:colors.textPrimary,
        marginTop:5
    },
    textWrapper:{
        flex:1
       
        
    },
    iconsWrapper:{
         flexDirection:"row",
         gap: 5
    }
})

export default styles