import { View, Text } from "react-native";

export default function LittleLemonHeader(){
    return(
        <View style = {Style.contenedor}>
            <Text style = {Style.Texto} numberOfLines={1}>
               Little Lemon
            </Text>
        </View>
    );
}

const Style = { 
    contenedor:{
        backgroundColor: '#F4CE14',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Texto : {
        paddingTop: 35,
        fontSize : 30,
        color : 'black'
    }
}
