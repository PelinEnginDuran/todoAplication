import { StyleSheet } from "react-native"
import { colors } from "../../utils/constants"

const styles= StyleSheet.create({
    wrapper:{
        marginHorizontal:20,
        marginVertical:20,
        flexDirection:"row",
        alignItems:"center"

       
    },
    input:{
        borderWidth:1,
        borderColor:colors.textSecondry,
        height:40,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        color:colors.textPrimary,
        fontSize:16,
        flex:1,
    },
    icon:{
        fontSize:30,
        color:colors.bgPrimary,
        marginLeft:10

    }
})

export default styles