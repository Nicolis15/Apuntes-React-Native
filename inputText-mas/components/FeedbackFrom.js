import { useState } from 'react';
import { Platform } from 'react-native';
import { View, StyleSheet, TextInput, Text, ScrollView, KeyboardAvoidingView } from 'react-native'

export default function FeedbackForm() {
    const [firstName, chageFirstName] = useState()
    const [lastName, chageLastname] = useState()
    const [message, chagemessage] = useState()
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView style={styles.container} keyboardDismissMode= 'on-drag'>
                <Text style={styles.headingSection}> How was your visit to Litlle Lemon?</Text>
                <Text style={styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would love
                    to hear your experience with us!
                </Text>
                <TextInput
                    value={firstName}
                    onChangeText={chageFirstName}
                    placeholder={'First Name'}
                    style={styles.input}
                    
                />


                <TextInput
                    value={lastName}
                    onChangeText={chageLastname}
                    placeholder={'Last Name'}
                    style={styles.input}
                />

                <TextInput
                    value={message}
                    onChangeText={chagemessage}
                    placeholder={'Please leave feedback'} 
                    style={styles.messageInput}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
}); 