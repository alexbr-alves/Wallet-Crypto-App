<<<<<<< HEAD
import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput} from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import styles from './styles'

import imageTopo from '../../../assets/04.png'

export default function Login( ) {
    const [secureMode, setSecureMode] = useState(true);
=======
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
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68
    const navigation = useNavigation();
    
    
    return(
<<<<<<< HEAD
        <View style={styles.container}>
            <Image style={styles.imageTopo} source={imageTopo}/>
            <View style={styles.areaInput}>

                <TextInput
                style={styles.input_email}
                label={'Email'}
                mode="outlined"
                
                />

                <TextInput
                style={styles.input_senha}
                label={"Senha"}
                mode="outlined"
                secureTextEntry={secureMode}
                right={<TextInput.Icon 
                    icon={secureMode? "eye-off" : "eye"}
                    onPress={() => setSecureMode(!secureMode)}
                    />}
                
                />
            </View>
            <TouchableOpacity style={styles.esqueceuSenha}>
                <Text style={styles.esqueceuSenha__text}>Forgot your password?</Text>
            </TouchableOpacity>

        
       
            <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('Home')}}>
                <Text style={styles.botao__text}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.semConta}>Don't have an account yet?</Text>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botao__text}>Register</Text>
            </TouchableOpacity>
        </View>
)};
=======
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
>>>>>>> dc1398e9165fcbb60ef0ce39f15c1080bb0b7c68

