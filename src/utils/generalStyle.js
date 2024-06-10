import { ScrollView, StyleSheet } from "react-native";
import { colors } from "./constants";

const generalStyles=StyleSheet.create({
    flex1:{
        flex:1,
        borderWidth:1
    },
    todosWrapper:{
        marginHorizontal:30,
        marginVertical:30,
        flex:1,
        borderWidth:1
    },
    emptyText:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color: colors.bgPrimary
        
    },
    bgWhite:{
        backgroundColor:colors.bgWhite
    },
    ScrollView:{
        flex:"grow"
    }
        
})

export default  generalStyles
