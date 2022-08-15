import { StyleSheet,  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    fundo :{
        flex: 1,
    },
    topo: {
        flexDirection: 'row',
        marginTop: '8%',
        justifyContent: 'flex-start'
    },
    IconRocket: {
        marginHorizontal: '3%', 
        marginTop: '3%'  
    },
    topo__texto: {
        marginTop: '4%',
        fontFamily: "SairaExtraCondensed_700Bold",
        fontSize: 20,
        alignSelf: 'flex-start',
        letterSpacing: 2
    },
    topo__Skip:{
        marginTop: '2%',
        fontSize: 25,
        textDecorationLine: 'underline',
       fontFamily: 'SairaExtraCondensed_700Bold',
        marginLeft: '60%',
        letterSpacing: 2
    },


    //                                    SESSÃO DESCRIÇÃO

    descicoes: {
        marginTop: '70%',
        alignItems: 'center',
    },
    descicoes__texto1: {
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'SairaExtraCondensed_500Medium',

    },
    descicoes__texto3: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: '8%',
        color: '#696969',
        fontFamily: 'SairaExtraCondensed_400Regular',
        letterSpacing: 1
    },


    //                              SESSAO ICONES


    area__icones: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%'
    },
    icones: {
        marginHorizontal: '1%'
    },



    //                                 SESSAO BOTAO

    area__botao: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    botao__texto:{
        backgroundColor: '#000000',
        paddingHorizontal: '25%',
        paddingVertical: '4%',
        borderRadius: 8,
        color: '#FFFFFF',
        fontSize: 20
    }

    
})