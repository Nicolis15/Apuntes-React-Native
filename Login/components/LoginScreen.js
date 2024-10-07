import {useState} from 'react'
import {ScrollView, Text, TextInput, Platform, KeyboardAvoidingView, StyleSheet, Alert} from 'react-native'

export function LoginScreen(){
    const [email, onChangeEmail] = useState()
    const [password, onChachePassword] = useState();

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <Text style = {styles.regularText}>Welcome to Little Lemon</Text>
                <Text style = {styles.regularText}>Login to continue </Text>

                <TextInput
                    value = {email}
                    onChachePassword = {onChangeEmail}
                    placeholder={'Email'}
                    keyboardType = {'email-adress'}
                    style = {styles.inputBox}
                    onFocus={() => Alert.alert('esto es una alerta en un onFocus')}
                    onBlur = {( )=>Alert.alert('Esto es un alert en onBlur')}
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

            </ScrollView>
        </KeyboardAvoidingView>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
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
  });