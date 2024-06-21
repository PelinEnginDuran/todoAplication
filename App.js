

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import Header from './src/components/header';
import generalStyles from './src/utils/generalStyle';
import Icon from "react-native-vector-icons/AntDesign"
import { colors } from './src/utils/constants';
import Input from "./src/components/input";
import styles from './src/components/header/style';
import Todo from './src/components/todo';
import AsyncStorage from '@react-native-async-storage/async-storage';



function App(){
  const[text,setText]=useState("")
  const[todos,setTodos]=useState([])
  const addTodo=()=>{
    const newTodo={
      id: String(new Date().getTime()),
      text:text,
      date: new Date(),
      completed: false
    }
    AsyncStorage.setItem("@todos", JSON.stringify([...todos,newTodo]))
    .then(()=>{
      setTodos([...todos,newTodo])
      setText("")
    })
    .catch(err=>{
      Alert.alert("kayıt esnasında hata oluştu")
    })
   
  }
  useEffect(()=>{
    AsyncStorage.getItem("@todos")
    .then(res=>{
      console.log(res)
      if(res !== null){
        const parsedRres=JSON.parse(res)
        setTodos(parsedRres)
      }
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My To Do App" />
      <Input 
      value={text}
      onChangeText={(text)=>setText(text)}
      placeholder='birşeyler yaz' 
      hasIcon
      IconName="arrowleft" 
      onIconPress={addTodo}
      />
      <View style={generalStyles.todosWrapper}>
        {todos.length === 0  ? (
        <Text style={generalStyles.emptyText}>henüz kayıtlı to do bulunamadı...</Text>
      ) : (
           <ScrollView style={styles.ScrollView}>
             
             { todos?.map((todo)=>(<Todo todos={todos} setTodos={setTodos}key={todo?.id} todo={todo}/>))}
            
           </ScrollView>
          )}

      </View>
          
    </SafeAreaView>
  );
}




export default App;