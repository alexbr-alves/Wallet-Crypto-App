import React from "react";
import { useNavigation } from "@react-navigation/native";
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native'



export default function Body_horizontal({styles, dataHorizontal}){
    const navigation = useNavigation();
    const renderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.body_horizontal} onPress={() => {navigation.navigate('Coins', {item: item})}}>
                <View style={styles.body_horizontal_titles}>
                    <Image style={styles.body_horizontal_image} source={{uri: item.image}}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.body_horizontal_titles_name}>{item.name}</Text>
                        <Text style={styles.body_horizontal_titles_symbol}>{item.symbol.toUpperCase()}</Text>
                    </View>
                    
                </View>
                <View style={styles.body_horizontal_prices}>
                    <Text style={styles.body_horizontal_prices_price}>{item.current_price}</Text>
                    <Text style={[styles.body_horizontal_prices_percent, item.price_change_percentage_24h < 0 ? {color: 'red'} : {color: '#008000'}]}>{item.price_change_percentage_24h}</Text>
                </View>
                

            </TouchableOpacity>
)};
    return(
        <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20, marginLeft: 17}} 
            data={dataHorizontal}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
      />
)};