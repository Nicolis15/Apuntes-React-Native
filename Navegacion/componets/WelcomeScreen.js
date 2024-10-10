import {View, Image, Text, StyleSheet, Pressable} from 'react-native'

export default function({navigation}){
    return(
        <View style= {Styles.container}>
            <Image style={Styles.imagen} source = {require('../Img/LittleLemonLogo.png')}/>
            <Text style={Styles.texto}>Little Lemon, your local Mediterrean bistro</Text>
            <Pressable style={Styles.boton} onPress={() => navigation.navigate('Menu')}>
                <Text>View Menu</Text>
            </Pressable>

        </View>
    );
}




const Styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagen:{
        height: 200,
        width: 300,
        resizeMode: 'contain'
    },
    texto:{
        textAlign: 'center',
        fontSize: 24
    },
    boton:{
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: '#FFEF00'
    }
});