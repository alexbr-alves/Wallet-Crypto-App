import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TextInput,
    KeyboardAvoidingView, Image} from "react-native";
import * as Animatable from "react-native-animatable"

import IconRocket from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import fundo from '../../../assets/fundo.jpg';
import { useNavigation } from "@react-navigation/native";


export default function Login( ) {
    const [loginCpf, setLoginCpf] = useState();
    const [loginSenha, setLoginSenha] = useState();
    const navigation = useNavigation();
    
    
    return(
        <KeyboardAvoidingView  behavior="padding" style={styles.container}>
            <ImageBackground style={styles.fundo} source={fundo} resizeMode={'cover'}>
                <View style={styles.topo}>
                    <IconRocket style={styles.IconRocket} name="rocket" size={30} /> 
                    <Text style={styles.topo__texto}>Rocket Wallet</Text>
                </View>
               
                <View style={styles.areaInput}>
            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="number-pad"
                value={loginCpf}
                onChangeText={setLoginCpf}
                 />
            </View>

            <View style={styles.areaInput}>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="number-pad"
                value={loginSenha}
                onChangeText={setLoginSenha}
             />
            </View>

                
                
                <View style={styles.area__botao}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.botao__texto}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

