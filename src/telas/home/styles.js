import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#ffffff',
    },
    topo: {
        marginTop: 45,
        marginLeft: 17,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    saudacao: {
        fontSize: 15,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular'
    },
    user_name: {
        fontSize: 28,
        lineHeight: 29,
        fontFamily: 'Epilogue_600SemiBold'
    },
    user_image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 19
    },
    body: {
        marginTop: 23,
        marginLeft: 17
    },
    body_balance: {
        fontSize: 15,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular'
    },
    body_balance_value: {
        fontFamily: 'Epilogue_600SemiBold',
        fontSize: 26,
    },
    body_balance_value_percent: {
        fontFamily: 'Epilogue_500Medium',
        alignSelf: 'center',
        marginLeft: 5
    },
    body_horizontal: {
        width: 200,
        height: 160,
        backgroundColor: '#ffffff',
        marginRight: 16,
        justifyContent: 'space-between',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    body_horizontal_titles:{
        flexDirection: 'row', 
        marginTop: 16,
    },
    body_horizontal_image:{
        width: 36,
        height: 36,
        marginLeft: 16,  
    },
    body_horizontal_prices: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 17,
        marginBottom: 16
    },
    body_horizontal_titles_name:{
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    body_horizontal_titles_symbol: {
        fontSize: 12,
        lineHeight: 14,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 0.5
    },
    body_horizontal_prices_price:{
       fontSize: 14,
       lineHeight: 17,
       fontFamily: 'Epilogue_600SemiBold',
       color: '#222222',
    },
    body_horizontal_prices_percent: {
        fontSize: 14,
        lineHeight: 17,
        color: '#222222',
        fontFamily: 'Montserrat_500Medium',
    },
    body_vertical:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5
        
    },
    body_vertical_image:{
        width: 48,
        height: 48,
        marginLeft: 16,  
    },
    body_vertical_titles:{
        marginLeft: 10
    },
    body_vertical_titles_symbol: {
        fontSize: 14,
        lineHeight: 19,
        color: '#222222',
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: 0.5,
    },
    body_vertical_titles_name:{
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
    },
    body_vertical_prices_price:{
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
        textAlign: 'left'
     },
     body_vertical_prices_percent: {
         fontSize: 14,
         lineHeight: 17,
         color: '#222222',
         fontFamily: 'Montserrat_500Medium',
         textAlign: 'left' 
     },
     body_vertical_header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 17,
        borderBottomWidth: 0.5
     },
     body_vertical_header_title: {
        fontFamily: 'Epilogue_600SemiBold',
        color: '#222222',
        fontSize: 20,
        lineHeight: 29
     },
     body_vertical_header_all:{
        fontSize: 20,
        lineHeight: 29,
        color: '#222222',
        fontFamily: 'Montserrat_500Medium',
     },
     body_vertical_footer: {
        height: 60,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17
     },
     body_vertical_footer_item1:{
        height: 44,
        width: 160,
        backgroundColor: '#45B68D',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
     },
     body_vertical_footer_item2:{
        height: 44,
        width: 160,
        backgroundColor: '#e8403a',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
     },
     body_vertical_footer_item1_text: {
        fontFamily: 'Montserrat_500Medium',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        lineHeight: 21
     },
     body_vertical_footer_item2_text: {
        fontFamily: 'Montserrat_500Medium',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        lineHeight: 21
     }
    
    
    
})