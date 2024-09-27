
import { View, Text , StyleSheet} from "react-native";
export default function WelcomeScreen(){
    return(
        <View>
            <Text style = {Styles.Texto1}>
                Bienvenido a Little Lemon
            </Text>
            <Text style = {Styles.Texto2}>
                Little Lemon es un encantador bistró de barrio que sirve comida sencilla y cócteles clásicos en un ambiente animado pero informal. ¡Nos encantaría saber más sobre su experiencia con nosotros!
            </Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    Texto1: {
        color : 'white',
        textAlign : 'center',
        fontSize : 30,
        margin : 40
    },
    Texto2: {
        color : 'white',
        fontSize : 23,
        margin : 25,
        textAlign : 'center'
    }  
})