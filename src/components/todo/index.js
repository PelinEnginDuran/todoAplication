import React,{useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils/constants";
import EditModal from "../editModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Todo = ({ todo = {}, todos = [], setTodos = () => {} }) => {
  const [openModal,setOpenModal]=useState(false)
  const [willEditText, setWillEditText]= useState(todo.text)
  const [hasError, setHasError]=useState(false)
  const[errorMes,setErrorMes]=useState("")

  const deleteTodo = () => {
    Alert.alert("Silme İşlemi", `${todo?.id} numaralı todo'yu silmek ister misiniz?`, [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const filteredTodos = todos.filter((item) => item.id !== todo.id);
          AsyncStorage.setItem("@todos", JSON.stringify(filteredTodos))
          .then(()=>{
            setTodos(filteredTodos);

          })
       
        },
        style: "destructive",
      },
    ]);
  };

  const completedTodo = () => {
    Alert.alert("Tamamlandı mı?", "Görev tamamlandı olarak işaretlensin mi?", [
      {
        text: "Cancel",
      },
      {
        text: "İşaretle",
        onPress: () => {
          const tempArr = []
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id) {
              tempArr.push(todos[i]);
            } else {
              const newToDo = {
                ...todo,
                completed: !todo.completed,
              };
              tempArr.push(newToDo);
            }
          }
          AsyncStorage.setItem("@todos", JSON.stringify(tempArr))
          .then(()=>{
            setTodos(tempArr)

          })
        
        },
        style: "destructive",
      },
    ]);
  };
  const EditTodo=()=>{
    if (willEditText === ""){
    setHasError(true)
  setErrorMes("* text alanı boş bırakılamaz")
  setTimeout(() => {
    setHasError(false)
    setErrorMes("")
    
  }, 3000);
  return
}
const tempArr=[]
for(let i=0; i<todos.length; i++){
  if(todos[i].id !== todo.id){
    tempArr.push(todos[i])
  }else{
    const updateTodo ={
      ...todo,
      text: willEditText,
    }
    tempArr.push(updateTodo)
   

  }
}
AsyncStorage.setItem("@todos", JSON.stringify(tempArr))
.then(()=>{
  setTodos(tempArr)
    setOpenModal(false)

})
    
  }

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>{todo?.text}</Text>
        <Text style={styles.date}>{new Date(todo?.date).toLocaleDateString("tr-TR")}</Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity>
          <Icon name="tool" color={colors.bgBlack} size={25} onPress={()=>setOpenModal(true)}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={completedTodo}>
          <Icon name={todo?.completed === true ? "checkcircle" : "checkcircleo"} size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="close" color={colors.bgBlack} size={25} />
        </TouchableOpacity>
      </View>
      <EditModal willEditText={willEditText} setWillEditText={setWillEditText}
      visible={openModal} 
      closeModal={()=>setOpenModal(false)}
      onConfirm={EditTodo}
      hasError={hasError}
       errorMes={errorMes}
      />

    </View>
  );
};

export default Todo;
