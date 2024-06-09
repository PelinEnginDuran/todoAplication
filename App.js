

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/header';
import generalStyles from './src/utils/generalStyle';
import Icon from "react-native-vector-icons/dist/AntDesign"
import { colors } from './src/utils/constants';

function App(){
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My To Do App"/>
    <View>
    <Text>TODOAPP</Text>
    <Icon name="shrink" size={25} color={colors.bgPrimary}/>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});


export default App;