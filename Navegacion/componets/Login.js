import {View, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, StyleSheet , Pressable} from 'react-native';
import {useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({navigation}){
    const [email, onChangeEmail] = useState()
    const [password, onChachePassword] = useState();
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
                <Text style = {styles.regularText}>Welcome to Little Lemon</Text>
                <Text style = {styles.regularText}>Login to continue </Text>

                <TextInput
                    value = {email}
                    onChachePassword = {onChangeEmail}
                    placeholder={'Email'}
                    keyboardType = {'email-adress'}
                    style = {styles.inputBox}
                    clearButtonMode = "always"
                />
                <TextInput
                    value = {password}
                    placeholder={'Contraseña'}
                    onChachePassword = {onChachePassword}
                    secureTextEntry = {true}
                    keyboardType = {'default'}
                    style = {styles.inputBox}
                />
                <View style={styles.container}>
                    <Pressable style={styles.boton} onPress={() => navigation.navigate('Welcome')}>
                        <Text>View Menu</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: 'white'
    },
    container:{
        alignItems: 'center'
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#EDEFEE',
    },
    boton:{
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        width: 150,
        maxWidth: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: '#FFEF00'
    }
  });