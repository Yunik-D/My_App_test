import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState(''); //useState do nome (UseState é o controlador de estado).
    const [age, setAge] = useState('');

    return(
        <View style={styles.body}> 
        <TextInput placeholder = "Wie haiße sie?"
         onChangeText={setName}/>
            <Text style={styles.title}>
                Hallo, Ich haiße {name}!
                </Text>
                
        <TextInput placeholder = "Wie alt bist du?"
         onChangeText={setAge}/>
            <Text style={styles.title}>
                 Ich bin {age} Jahre alt!
                </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
})