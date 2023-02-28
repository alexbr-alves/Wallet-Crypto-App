import { StyleSheet,  } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center',
       
    },
    texts: {
        marginTop: 120,
        marginHorizontal: 30,
        fontSize: 22,
        lineHeight: 32,
        fontFamily: 'Montserrat_500Medium_Italic'
    } ,
    images:{
       marginTop: 50
    },
    buttom:{
        height: 50,
        width: 100,
        borderRadius: 15,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttom_text:{
        color: '#FFFFFF',
        fontSize: 18
    }
   
    
})