import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState(''); //useState do nome (UseState é o controlador de estado).
    const [age, setAge] = useState('');
    const ageN = parseInt(age);

    const [Altura, setAltura] = useState('');
    const [Peso, setPeso] = useState('');
    const pesoN = parseFloat(Peso);
    const alturaN = parseFloat(Altura);
    const IMC = pesoN / (alturaN * alturaN);

    

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

         <TextInput placeholder = "Qual a sua altura?"
         onChangeText={setAltura} keyboardType = "numeric" style={styles.input}/>
            
                
         <TextInput placeholder = "Qual o seu peso?"
         onChangeText={setPeso} keyboardType="numeric" style={styles.input}/>
            <Text style={styles.title}>
                 Seu IMC é: {IMC}. <br/>

                 Menor que 18.5: Abaixo do peso.<br/>
                 Entre 18.5 e 24.9: Peso normal.<br/>
                 Entre 24.9 e 29.9: Sobrepeso.<br/>
                 Entre 29.9 e 34.9: Obesidade grau I.<br/>
                 Entre 34.9 e 39.9: Obesidade grau II.<br/>
                 Maior que 40: Obesidade grau III.<br/>
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