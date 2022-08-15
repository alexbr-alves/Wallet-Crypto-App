import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, ImageBackground, Image, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable"

import api4 from '../../../../servicos/api4'

import styles from './styles1';

import IconWallet from 'react-native-vector-icons/Fontisto';
import IconCircle from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconp2p from 'react-native-vector-icons/FontAwesome5';
import IconMoney from 'react-native-vector-icons/FontAwesome5';
import IconDeposit from 'react-native-vector-icons/Feather';
import IconWithdrow from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

export default function Tela1() {
    const [coin, setCoin] = useState([]);
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const navigation =useNavigation();

    useEffect(() => {
        api4.get().then((response) => {
          setCoin(response.data)
        }).catch(error => console.log(error))
      }, [])

      function filtra(item){
        for(let i = 0; i < 10; i++){
            if(coin[i] < 5){
                return coin[i].item
            }
        }
      }



    return( 
        <Animatable.View animation={'bounceInUp'} style={styles.container}>
            
            <View  style={styles.balanco}>
                <Text style={styles.balanco__titulo}>My balance</Text>
                <View style={styles.balanco__totalSigla}>
                    <Text style={styles.balanco__total}>$ 185.644,64</Text>
                    <Text style={styles.balanco__sigla}>USD</Text>
                </View>
            </View>


            <View style={styles.servicos}>
                <View style={styles.servicos__listaL}>
                <   TouchableOpacity style={{flexDirection: 'row'}}>
                        <IconWallet style={styles.servicos__icones} size={17} color='#FFFFFF' name="wallet"/>
                        <Text style={styles.servicos__titulo}>Buy with Card</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <IconCircle style={styles.servicos__icones2}size={25} color='#FFFFFF' name="refresh-auto"/>
                        <Text style={styles.servicos__titulo}>Auto-trade</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.servicos__listaR}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                         <Iconp2p style={styles.servicos__icones} size={18} color='#FFFFFF' name="user-tie"/>
                        <Text style={styles.servicos__titulo}>P2P Trading</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <IconMoney style={styles.servicos__icones} size={18} color='#FFFFFF' name="money-bill-wave-alt"/>
                        <Text style={styles.servicos__titulo}>Seeking Earn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.transfers}>
                <TouchableOpacity style={styles.transfers__deposit}>
                    <IconDeposit style={styles.transfers__icone} size={40} color='#82ffac' name="arrow-down-left"/>
                    <Text style={styles.transfers__deposit__texto}>Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transfers__withdrow}>
                    <IconWithdrow style={styles.transfers__icone} size={40} name="arrow-up-right"/>
                    <Text style={styles.transfers__withdrow__texto}>WithDrow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.area__titulo}>
                <Text style={styles.titulo}>Highlights</Text>
            </View>
            <FlatList 
            style={styles.areaCrypto} 
        data={coin}
        key={({id}, index) => id}
        renderItem={({item}) => (
            
            <TouchableOpacity style={styles.lista}
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
            >

                <View style={styles.area__logo}>
                
                        <Text style={styles.logo}>{item.symbol.toUpperCase().substring(0,1)}</Text>
                

                    <View style={styles.nome_symbol}>
                        <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
                        <Text style={styles.nome}>{item.name}</Text>
                    </View>
                </View>

                <View style={styles.preco_volume}>
                    <Text style={styles.preco}>USD {item.current_price}</Text>
                    <Text style={ item.price_change_percentage_24h < 0? styles.volumeVermelho : styles.volumeVerde}>{`${item.total_volume}  (${item.price_change_percentage_24h.toFixed(2)}%)`}</Text>
                </View>
            </TouchableOpacity>
    )}
    />

        </Animatable.View>
    )

}