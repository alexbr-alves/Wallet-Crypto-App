import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import * as Animatable from "react-native-animatable"

import apiTotal from '../../../../servicos/apiTotal'


import styles from "./styles2";



export default function Tela2() {
    const [coin, setCoin] = useState([]);
    const [item1, setItem1] = useState(true);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        apiTotal.get().then((response) => {
          setCoin(response.data)
        }).catch(error => console.log(error))
      }, [])

      
                    

    return( 
        <Animatable.View animation={'bounceInUp'} style={styles.container}>
            
            

            <View style={styles.area__titulo}>
                <Text style={styles.titulo}>Balance</Text>
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
                    <Text style={styles.preco}>USD {item.current_price}<Text></Text></Text>
                    <Text style={item.price_change_percentage_24h < 0? styles.volumeVermelho : styles.volumeVerde}>{`${item.total_volume}  (${item.price_change_percentage_24h.toFixed(2)} %)`}</Text>
                </View>
               
            </TouchableOpacity>
    )}
    />

        </Animatable.View>
    )

}