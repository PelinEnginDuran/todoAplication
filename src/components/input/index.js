import React from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import styles from "./style";

const Input=({
    placeholder="type something",
    keyboardType="default",
    multiline=false,
    hasIcon=false,
    IconName="plus",
    onIconPress=()=>{},
    value="",
    onChangeText=()=>{}



})=>{
    return(
        <View style={styles.wrapper}>
            <TextInput
            multiline={multiline}
            keyboardType={keyboardType}
            style={styles.input} 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}

            />
          {hasIcon &&  <TouchableOpacity onPress={onIconPress}>
           <Icon name={IconName} style={styles.icon}/>
           </TouchableOpacity>}

        </View>

    )
}
export default Input;