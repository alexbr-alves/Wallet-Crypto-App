import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native"
import Chart from "../../../components/chart";


export default function Body_vertical({styles, data}){
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.body_vertical} onPress={() => {navigation.navigate('Coins', {item: item})}}>
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
)};

    const ListHeaderComponent = () => {
        return (
            <View style={styles.body_vertical_header}>
                <Text style={styles.body_vertical_header_title}>Market Statistics</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Explorer')}}>
                <Text style={styles.body_vertical_header_all}>{"All >"}</Text>
                </TouchableOpacity>
            </View>
)};

    const ListFooterComponent = () => {
        return(
            <View style={styles.body_vertical_footer}>

                <TouchableOpacity style={styles.body_vertical_footer_item1}>
                    <Text style={styles.body_vertical_footer_item1_text}>Deposit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.body_vertical_footer_item2}>
                    <Text style={styles.body_vertical_footer_item2_text}>Withdraw</Text>
                </TouchableOpacity>

            </View>
)};
    return(
        <FlatList
            scrollEnabled={false}
            style={{marginTop: 20, marginHorizontal: 17}} 
            data={data}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
            ListFooterComponent={ListFooterComponent}
            keyExtractor={(item) => item.id.toString()}
        />
)};