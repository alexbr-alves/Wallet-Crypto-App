import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput} from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import styles from './styles'

import imageTopo from '../../../assets/04.png'

export default function Login( ) {
    const [secureMode, setSecureMode] = useState(true);
    const navigation = useNavigation();
    
    
    return(
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

