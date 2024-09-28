import {View , Text, ScrollView, StyleSheet} from 'react-native';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];

export default function MenuItems(){
    return(
        <View style={Styles.contenedor}>
            <Text style={Styles.Texto1}>View Menu</Text>
            <ScrollView  indicatorStyle={'white'} style={Styles.Scroll}>
                <Text style={Styles.Texto2} >{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
};

const Styles = StyleSheet.create({
    contenedor : {
        flex : 0.75,
        alignItems : 'center',
        paddingTop : 20
    },
    Texto1 : {
        color : 'white',

        fontSize : 30
    },
    Texto2 : {
        color : '#F4CE14',
        fontSize : 24,
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    Scroll : {
        width: '100%'
    }

});