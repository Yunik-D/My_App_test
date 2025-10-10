import { fetchCharacters } from "@/services/list";
import React, { useEffect, useState } from "react"; //importando biblioteca react.
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native"; 

interface Personagem {
  id: number;
  name: String;
  images: [String];
}

export default function Home(){
    const [name, setName] = useState(''); //UseState é o controlador de estado. Ele mantém a string
    const [age, setAge] = useState(''); //Vazia até que o usuário preencha um campo. É atualizado em tempo real.
    const ageN = parseInt(age); //Converte idade string para inteiro.

    const [Altura, setAltura] = useState(''); 
    const [Peso, setPeso] = useState('');
    const pesoN = parseFloat(Peso);
    const alturaN = parseFloat(Altura);
    const IMC = pesoN / (alturaN * alturaN); //calculando o IMC.

    let cls = ""; //Define a variável vazia para o caso de condição. Precisa ser tipo let para que o valor possa mudar.
    if (!isNaN(IMC)) { // !isNaN(IMC) irá retornar true caso o valor seja tipo number e executar a condição. 
      if (IMC < 18.5) { 
         cls = "em condição de fragilidade corpórea, abaixo do peso que vos seria digno.";
      } else if (IMC >= 18.5 && IMC < 24.9) {
        cls = "em equilíbrio aprazível, com peso tido por normal às vossas medidas.";
      } else if (IMC >= 24.9 && IMC < 29.9) {
        cls = "levemente excedido em vossa compleição, encontrando-vos em sobrepeso.";
      } else if (IMC >= 29.9 && IMC < 34.9) {
        cls = "em volumosa compleição, classificado como Obesidade Grau I.";
      } else if (IMC >= 34.9 && IMC <= 39.9) {
        cls = "em vultosa compleição, classificado como Obesidade Grau II.";
      } else if (IMC >= 40) {
        cls = "em grave excesso de massa, classificado como Obesidade Grau III.";
  } //Dependendo da condição atinginda, a variável cls receberá a string da respectiva condição.

const [Personagens, setPersonagens] = useState<Personagem[]>([]);

useEffect(() => {
  async function carregarPersonagens(){
    const dados = await fetchCharacters();
    setPersonagens(dados.characters);
  }

  carregarPersonagens();
}, []);

}

    return(
        <View style={styles.body}> 
         <TextInput placeholder = "Wie heiße Sie?"
         onChangeText={setName} style={styles.input}/> {/*Campo indicativo para o usuário preencher com dados.*/}
            <Text style={styles.title}>
                Hallo, Ich heiße {name}! {/*Exibe o texto e o conteúdo que será armazenado na variável {name}.*/}
                </Text>
                
         <TextInput placeholder = "Wie alt bist du?"
         onChangeText={setAge} keyboardType="numeric" style={styles.input}/> {/*Campo indicativo para o usuário preencher com dados.*/}
            <Text style={styles.title}>
                 Ich bin {ageN} Jahre alt! {/*Exibe o texto e o conteúdo que será armazenado na variável {ageN}.*/}
                </Text>

         <TextInput placeholder = "Estatura de porte"
         onChangeText={setAltura}  style={styles.input}/>
            
                
         <TextInput placeholder = "Volume corporal"
         onChangeText={setPeso}  style={styles.input}/>
            <Text style={styles.title}>
                {isNaN(IMC) 
                ? "Por obséquio, infame persona, informe corretamente vossa estatura de porte e volume."
                : `Vosso paquímetro de dobras cutâneas é: ${IMC.toFixed(2)} e encontra-se ${cls}`
                } {/* isNaN(IMC) = Se o valor digitado nos campos de altura e peso for texto, retorna a mensagem mantida em "?". Caso seja numérico, " : " segue com o cáuculo. "${IMC.toFixed(2)}" indica quantas casas decimais serão exibidas. */}
                </Text>
            

            <Text>Lista de persnagens</Text>

            <FlatList
              data={Personagens}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <View> 
                  <Image source={{uri: item.images[0]}}/>
                  <Text>{item.name}</Text>
                </View>

              )}
            />
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