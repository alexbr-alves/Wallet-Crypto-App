import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Chart from "../../../components/chart";

export default function Body({filterData, styles}){
    const navigation = useNavigation();
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.body_vertical} onPress={() => {navigation.navigate('Coins', {item: item})}} >
            <View style={{flexDirection: 'row'}}>
             <Image style={styles.body_vertical_image} source={{uri: item.image}}/>
             <View style={styles.body_vertical_titles}>
                <Text style={styles.body_vertical_titles_name}>{item.name}</Text>
                <Text style={styles.body_vertical_titles_symbol}>{item.symbol.toUpperCase()}</Text>
            </View>
           </View>
           
            <Chart tamanho={{width: 75}} svg={{stroke:  item.price_change_percentage_24h < 0? 'red' : 'green'}} item={item}/>
            <View style={{marginRight: 15, alignItems: 'flex-end'}}>
                <Text style={styles.body_vertical_prices_price}>{item.current_price}</Text>
                <Text style={[styles.body_vertical_prices_percent, 
                    item.price_change_percentage_24h < 0 
                    ? {color: 'red'} 
                    : {color: '#008000'}]}>
                    {item.price_change_percentage_24h}</Text>
            </View>
        </TouchableOpacity>     
        )
    }
    const ListHeaderComponent = () => {
        return(
            <TouchableOpacity style={styles.search_filter}>
                <Text style={styles.search_filter_text}>FILTER</Text>
            </TouchableOpacity>
        )
    }
    return(
        <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        style={{marginTop: 20, marginHorizontal: 17}} 
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
    )
}