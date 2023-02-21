import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Image, Text, TouchableOpacity } from "react-native";
import IconBack from 'react-native-vector-icons/Feather';
import IconHeart from 'react-native-vector-icons/Fontisto';

export default function Header({styles, data}){
    const navigation = useNavigation();
    const navigationBack = () => navigation.goBack();
    return(
        <View style={styles.header}> 
            <View style={styles.header_icons}>
                <TouchableOpacity onPress={navigationBack}>
                    <IconBack name='arrow-left' size={40} color='#222222' />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <IconHeart name='heart-alt' size={40} color='#222222' />
                </TouchableOpacity>
            </View>
                <Image style={styles.header_image} source={{uri: data.image}} />
                <Text style={styles.header_name}>{data.name}</Text>
                <Text style={styles.header_price}>${data.current_price}</Text>
                <Text style={[styles.header_percent, 
                    data.price_change_percentage_24h < 0 
                    ? {color: 'red'} 
                    : {color: '#008000'}]}>
                    {data.price_change_percentage_24h} %</Text>
            </View>
    )
}