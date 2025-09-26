import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState(''); //useState do nome (UseState é o controlador de estado).
    const [age, setAge] = useState('');
    const ageN = parseInt(age);

    return(
        <View style={styles.body}> 
        <TextInput placeholder = "Wie heiße Sie?"
         onChangeText={setName} style={styles.input}/>
            <Text style={styles.title}>
                Hallo, Ich heiße {name}!
                </Text>
                
        <TextInput placeholder = "Wie alt bist du?"
         onChangeText={setAge} keyboardType="numeric" style={styles.input}/>
            <Text style={styles.title}>
                 Ich bin {ageN} Jahre alt!
                </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "cyan",
        padding: 20
    },
    title: {
        fontSize: 25,
        fontFamily: "Rosemary",
        marginBottom: 15
    },
      input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff"
      }
})