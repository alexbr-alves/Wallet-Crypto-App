<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable"

import IconRocket from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import fundo from '../../../assets/fundo.jpg';
import { useNavigation } from "@react-navigation/native";



export default function Intro( ) {
    const [passpage, setPassPage] = useState(2);
    const navigation = useNavigation();
    const [texto, setTexto] = useState(
        <Animatable.Text duration={3000} animation={'bounceInUp'}  style={styles.descicoes__texto3}>
            We provide the safest and easiest-to-use                                       marketplace to trader 
            and investors </Animatable.Text>);




    function slideTexto(passpage){
        setPassPage(passpage + 1)
        if( passpage === 2){
            setTexto(<Animatable.Text  duration={1500} animation={'bounceInRight'} style={styles.descicoes__texto3}>
       We have a complete catalog with the best {'\n'} cryptos on the market
       </Animatable.Text>)      
        }
        if(passpage === 3){
            setTexto(<Animatable.Text duration={1500} animation={'bounceInLeft'} style={styles.descicoes__texto3}>
           Transformingthe financial market to {'\n'} improve people's life
            </Animatable.Text>)            
        }
        if(passpage === 4){
            navigation.navigate('Login')
        }
        }
    
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.fundo} source={fundo} resizeMode={'cover'} >
                <View style={styles.topo}>
                <IconRocket style={styles.IconRocket} name="rocket" size={30} /> 
                <Text style={styles.topo__texto}>Rocket Wallet</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.topo__Skip}>Skip</Text>
                </TouchableOpacity>
                </View>
                    <Animatable.View  delay={600} animation='fadeInUp' style={styles.descicoes} >
                        <Text style={styles.descicoes__texto1}>Crypto wallet {'\n'} trusted by millions</Text>

                        {texto}
                        
                        <View>
                        </View>
                    </Animatable.View>

                    <View style={styles.area__botao}>
                        <TouchableOpacity onPress={() =>  slideTexto(passpage)}>
                            <Text style={styles.botao__texto}>Next</Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </View>
    )
}
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68

