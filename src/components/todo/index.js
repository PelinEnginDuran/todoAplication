import React from "react";


import { View, Text, TouchableOpacity  } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils/constants";

const Todo=({todo={}})=>{
    return(
        <View style={styles.todoWrapper}>
           <View style={styles.textWrapper}>
           <Text style={styles.title}>{todo?.text}</Text>
            <Text style={styles.date}>{new Date(todo?.date).toLocaleDateString("tr-TR")}</Text>
           </View>
           <View style={styles.iconsWrapper}>
         <TouchableOpacity>
         <Icon 
         name="tool"
         color={colors.bgBlack}
         size={25}/>
         </TouchableOpacity>
         <TouchableOpacity>
         <Icon name={todo?.completed === true ? "copy1" : "mobile1"}
         color={colors.kiremit}
         size={25}/>
         </TouchableOpacity>
         <TouchableOpacity>
         <Icon name="downcircle"
         color={colors.bgBlack}
         size={25}/>
         </TouchableOpacity>
           </View>
        </View>
    )
}
export default Todo