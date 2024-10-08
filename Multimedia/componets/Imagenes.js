import{View, StyleSheet, Text, Image, ImageBackground, useColorScheme, useWindowDimensions} from 'react-native';

export default function Imagenes(){
    const colorCheme = useColorScheme();
    const {width, height, fontScale} = useWindowDimensions();
    return(
    <View 
    style={[styles.contenedor, 
    colorCheme === 'light'? {backgorundColor:'#fff'} : {backgorundColor:'#333333'}]}>

        <Image  
        style={styles.imagen} 
        source={require('../img/LittleLemonLogo.png')}
        resizeMode='contain'
        accessible={true}
        accesibilityLabel='Little Lemon Logo'/>
        <ImageBackground source={require('../img/fondo.jpg')} resizeMode='contain'>
            <Text style = {styles.title}>
                Little Lemon, your local Mediterrean bistro
            </Text>
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: 'center'
    },
    contenedor: {
        marginTop: 40,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    imagen: {
        height: 100,
        width: 300,
        //resizeMode: 'contain',
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        textAlign: 'center', 
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333', 
    },
});