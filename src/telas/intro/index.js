import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppIntroSlider from "react-native-app-intro-slider";
import IntroData from "../../mocks/introData";

import styles from './styles';
    
export default function Intro( ) {
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return(
            <View style={styles.container}>
                <Text style={styles.texts}>{item.text}</Text>
                <Image style={styles.images} source={item.image}/>
            </View>
)};
    const renderDoneButton = () => {
        return(
            <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.buttom_text}>Begins</Text>
            </TouchableOpacity>
)};
    return(  
            <AppIntroSlider
                data={IntroData}
                renderItem={renderItem}
                activeDotStyle={{backgroundColor: '#000000'}}   
                renderDoneButton={renderDoneButton}
            />
)};

