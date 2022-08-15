import React, { useState} from "react";
import { View, Text, TouchableOpacity, Image, Alert} from "react-native";
import * as Animatable from "react-native-animatable"
import { useRoute } from "@react-navigation/native";

import styles from './styles';



import red from '../../../assets/red.jpg';
import green from '../../../assets/green.jpg'



export default function Coins( ) {
    const route = useRoute();
    const [modalVisible, setModalVisible] = useState(false);
    const [count , setCount] = useState(1);
    const total = count * route.params.price


    return(
        <Animatable.View animation={'bounceInRight'} duration={1500} style={styles.container}>
             <View style={styles.area__tituloSymbol}>
            <Text style={styles.symbol}>{route.params.symbol.toUpperCase()}</Text>
            <Text style={styles.titulo}>{route.params.name}</Text>
            </View>
            <Image style={styles.image} source={route.params.percent < 0? red : green}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <View style={styles.informacoesLeft}>  
           <Text style={styles.descricao}>Price</Text>
           <Text style={styles.itensComuns}>USD {route.params.price}</Text>  
           <Text style={styles.descricao}>Percent Price 24h</Text>
           <Text style={route.params.percent < 0? styles.percentVermelho : styles.percentVerde}>{route.params.percent.toFixed(2)}%</Text>
           <Text style={styles.descricao}>Volume</Text>
           <Text style={styles.itensComuns}>{route.params.volume}</Text>
           <Text style={styles.descricao}>Percent Volume</Text>
           <Text style={route.params.percentV < 0 ? styles.itemRed : styles.itemVerde}>{route.params.percentV}</Text>
           </View>

            <View style={styles.informacoesRight}>
            <Text style={styles.descricao}>Market Cap</Text>
            <Text style={styles.itensComuns}>{route.params.market_cap}</Text>
            <Text style={styles.descricao}>High 24H</Text>
            <Text style={styles.itensComuns}>{route.params.high_24h}</Text>
            <Text style={styles.descricao}>Low 24H</Text>
            <Text style={styles.itensComuns}>{route.params.low_24h}</Text>
            <Text style={styles.descricao}>Supply Total</Text>
            <Text style={styles.itensComuns}>{route.params.total_supply}</Text>
            </View>
           </View>
           <View style={styles.areaCompra}>
            <View style={styles.areaSoma}>
           <Text style={styles.count}>{count}</Text>
            <TouchableOpacity>
                <Text style={styles.total}>{total.toFixed(2)}</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=> {setCount(count + 1)}}>
                <Text style={styles.soma}>+</Text>
            </TouchableOpacity>
            </View>
           <TouchableOpacity style={styles.areaBotao} onPress={() => {{Alert.alert(
            `Confimed purchase${'\n'}
Name: ${route.params.name} ${'\n'}
Count: ${count} ${'\n'}
Total: UDS ${total.toFixed(4)}
             `
           )}{setCount(1)}} }
           >
            <Text style={styles.botao}>BUY</Text>
           </TouchableOpacity>
           
        </Animatable.View>


    )
}
