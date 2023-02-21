import React from "react";
import { View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import IconBack from 'react-native-vector-icons/Feather';

export default function Header(){
    const navigation = useNavigation();
    const navigationBack = () => navigation.goBack();
    return(
            <View>
                <TouchableOpacity style={{marginTop: 20, marginLeft: 20}} onPress={navigationBack}>
                    <IconBack name='arrow-left' size={40} color='#222222' />
                </TouchableOpacity>
            </View>
    )
}