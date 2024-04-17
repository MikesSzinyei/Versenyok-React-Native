/*
* File: App.js
* Author: Szinyei Mikes
* Copyright: 2024, Szinyei Mikes
* Group: Szoft II/2/N
* Date: 2024-04-17
* Github: https://github.com/MikesSzinyei
* Licenc: GNU GPL
*/
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function RacerScreen(){
  
  const host = "http://localhost:8000/"
  const endpoint = "versenyzok"
  const url = host + endpoint

  const [versenyzok, setVersenyzok] = useState([]);

  function getVersenyzok() {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setVersenyzok(result)
    })
  }


  return (
    <View style={styles.container}>
      

      <Pressable onPress={getVersenyzok}>
        <Text>Lekér</Text>
      </Pressable>

      

      <FlatList 
        data={versenyzok}
        renderItem={({item}) => (
        <View style={styles.view}>
          <Text style={styles.text}>Név: {item.nev}, Születés: {item.szuletes}, Nem: {item.nem}, Súly: {item.suly}</Text>
        </View>
        )}
      />
    </View>
  );

}
function AboutScreen(){
  return(
    <View style={styles.container}>
      <Text>
          Szinyei Mikes, SZOFT II/2/N, 2024-04-17
      </Text>
    </View>
  )
}
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
        name="Versenyzők"
        component={RacerScreen}
        />
        <Tab.Screen
        name="Névjegy"
        component={AboutScreen}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flexDirection: 'row',
    padding: 5,
    margin:3,
    borderWidth: 1,
    borderColor: 'red',
  }
});