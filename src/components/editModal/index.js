import React from "react";

import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Input from "../input";



const EditModal=({visible, closeModal, willEditText,setWillEditText, onConfirm, hasError, errorMes})=>{
    return(
        <Modal visible={visible} transparent >
            <View style={styles.modalContainer}>
               <View style={styles.editModalContainer}>
               <Text style={styles.title}>Güncelle</Text>
               <Input value={willEditText} onChangeText={(text)=>setWillEditText(text)}
                placeholder="Güncellenecek texti yazınız"/>
                <Text style={styles.ErrorMes}>{hasError=(errorMes)}</Text>
               <View style={styles.modalWrapper}>
               <TouchableOpacity onPress={closeModal}>
                    <Text style={styles.closeTouch}>Kapat</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.confirmTouch} onPress={onConfirm}>Onayla</Text>
                    
                </TouchableOpacity>
               
               </View>
               </View>
            </View>
        </Modal>
    )

}

export default EditModal