import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, ImageBackground, Image, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable"

import jimmy from '../../../assets/jimmy.png'
import Tela1 from "./componentes/tela1/tela1";
import Tela2 from './componentes/tela2/tela2';
import Tela3 from "./componentes/tela3/tela3";

import styles from './styles';



export default function Home() {
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const [telaAtiva, setTelaTiva] = useState(<Tela1/>);

    

      function FunItem1(){
        if(item1 === false){
            setItem1(true)
            setItem2(false)
            setItem3(false)
            setItem4(false)
            setTelaTiva(<Tela1/>)
        }
    }

    function FunItem2(){
        if(item2 === false){
            setItem1(false)
            setItem2(true)
            setItem3(false)
            setItem4(false)
            setTelaTiva(<Tela2/>)
        }
    }
    

    function FunItem3(){
        if(item3 === false){
            setItem1(false)
            setItem2(false)
            setItem3(true)
            setItem4(false)
            setTelaTiva(<Tela3/>)
        }
    }

    function FunItem4(){
        if(item4 === false){
            setItem1(false)
            setItem2(false)
            setItem3(false)
            setItem4(true)
        }
    }

    return( 
        <SafeAreaView style={styles.container}>
            
            <View style={styles.topo}>
                <Image style={styles.imagem__usuario} source={jimmy}></Image>
                <View>
                    <Text style={styles.topo__conta}>Personal account</Text>
                    <Text style={styles.topo__usuario}>Jimmy Page</Text>
                </View>
            </View>
            <View style={styles.barraH}>
                <TouchableOpacity onPress={() =>{FunItem1(item1)}}>
                <Text style={item1 === true? styles.barraItensAtivo : styles.barraItens}>Overview</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {FunItem2(item2)}}>
                <Text style={item2 === true? styles.barraItensAtivo : styles.barraItens}>Market</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {FunItem3(item3)}}>
                <Text style={item3 === true? styles.barraItensAtivo : styles.barraItens}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {FunItem4(item4)}}>
                <Text style={item4 === true? styles.barraItensAtivo : styles.barraItens}>Favorites</Text>
                </TouchableOpacity>        
            </View>
            
            {telaAtiva}

        </SafeAreaView>
    )

}