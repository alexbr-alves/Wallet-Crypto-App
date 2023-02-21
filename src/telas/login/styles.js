import { StyleSheet,  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    imageTopo: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        marginBottom: 20
    },
    areaInput: {
        marginHorizontal: 20
    },
    input_email: {
        marginTop: 10,
        backgroundColor: '#fff',
    },
    input_senha: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    esqueceuSenha: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 20
    },
    esqueceuSenha__text: {
        color: "#222222",
        fontStyle: 'italic', 
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500'
    },
    botao: {
        height: 50,
        width: 300,
        backgroundColor: '#222222',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    botao__text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
    semConta: {
        alignSelf: 'center',
        marginVertical: 40,
        color: '#222222',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500'
    }  
})