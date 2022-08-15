import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, ImageBackground, Image, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable"
import apiTotal from '../../../../servicos/apiTotal'
import styles from "./styles3";

import IconMoney from 'react-native-vector-icons/MaterialIcons';
import IconPercent from 'react-native-vector-icons/FontAwesome5';
import IconArrow from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";


export default function Tela3() {
    const [coin, setCoin] = useState([]);
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [seta, setSeta] = useState(true);
    const navigation = useNavigation();
    

    useEffect(() => {
        apiTotal.get().then((response) => {
          setCoin(response.data)
        }).catch(error => console.log(error))
      }, [])


        if(item1 === true && seta === true){
        coin.sort(function(a, b){
            if(a.current_price > b.current_price){
                return -1
            } else {return true}})}

        if(item1 === true && seta === false){
        coin.sort(function(a, b){
            if(a.current_price < b.current_price){
                return -1
            } else {return true}})}

        if(item2 === true && seta === true){
        coin.sort(function(a, b){
            if(a.market_cap_change_percentage_24h > b.market_cap_change_percentage_24h){
                return -1
            } else {return true}})}

        if(item2 === true && seta === false){
        coin.sort(function(a, b){
            if(a.market_cap_change_percentage_24h < b.market_cap_change_percentage_24h){
                return -1
            } else {return true}})}

        if(item3 === true && seta === true){
        coin.sort(function(a, b){
            if(a.total_volume > b.total_volume){
                return -1
            } else {return true}})}
            
        if(item3 === true && seta === false){
        coin.sort(function(a, b){
            if(a.total_volume < b.total_volume){
                return -1
            } else {return true}})}
            


    function FunItem1(){
        if(item1 === false){
            setItem1(true)
            setItem2(false)
            setItem3(false)}}
      
      function FunItem2(){
        if(item2 === false){
            setItem1(false)
            setItem2(true)
            setItem3(false)
            }}
    
    function FunItem3(){
        if(item3 === false){
            setItem1(false)
            setItem2(false)
            setItem3(true)
            }}


    return( 
        <Animatable.View animation={'bounceInUp'} style={styles.container}>
            
            

            <View style={styles.area__titulo}>
               <View style={styles.area__icones}>
               <TouchableOpacity onPress={()=> {FunItem1()}}>
                   <Text style={item1 === true? styles.icones__tituloaAtivo: styles.icones__titulo}>PRICE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {FunItem2()}}>
                    <Text style={item2 === true? styles.icones__tituloaAtivo: styles.icones__titulo}>PERCENT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {FunItem3()}}>
                    <Text style={item3 === true? styles.icones__tituloaAtivo: styles.icones__titulo}>VOLUME</Text>
                </TouchableOpacity>
               </View>
                <View style={styles.area__iconesSeta}>
                <TouchableOpacity onPress={()=>{setSeta(true)}}>
                    <IconArrow style={seta === true? styles.seta: null} color={'green'} size={40} name="arrow-bold-up"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSeta(false)}} >
                    <IconArrow style={seta === false? styles.seta: null} color={'red'} size={40} name="arrow-bold-down"/>
                </TouchableOpacity>
                </View>
            </View>
            <FlatList 
            style={styles.areaCrypto} 
        data={coin}
        key={({id}, index) => id}
        renderItem={({item}) => (
            
            <TouchableOpacity
            onPress={() => {navigation.navigate('Coins',{
                symbol: item.symbol,
                name: item.name,
                image: item.image,
                price: item.current_price,
                percent: item.price_change_percentage_24h,
                volume: item.total_volume,
                percentV: item.market_cap_change_percentage_24h,
                high_24h: item.high_24h,
                low_24h: item.low_24h,
                market_cap: item.market_cap,
                total_supply: item.total_supply
                
            } )}} 
            style={styles.lista}>

                <View style={styles.area__logo}>
                
                        <Text style={styles.logo}>{item.symbol.toUpperCase().substring(0,1)}</Text>
                

                    <View style={styles.nome_symbol}>
                        <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
                        <Text style={styles.nome}>{item.name}</Text>
                    </View>
                </View>

                <View style={styles.preco_volume}>
                    <Text style={styles.preco}>USD {item.current_price}<Text></Text></Text>
                    <Text style={item.price_change_percentage_24h < 0? styles.volumeVermelho : styles.volumeVerde}>{`${item.total_volume}  (${item.price_change_percentage_24h.toFixed(2)}%)`}</Text>
                </View>
               
            </TouchableOpacity>
    )}
    />

        </Animatable.View>
    )

}