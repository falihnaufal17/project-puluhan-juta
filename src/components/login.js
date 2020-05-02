import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import FormInput from './utilities/formInput';
import Button from './utilities/button';

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        const formData = {
            username,
            password
        }

        if (username !== '' && password !== '') {
            props.navigation.navigate('Profile', formData)
            setPassword('')
            setUsername('')
        } else {
            alert("Please fill data correctly!")
        }
    }

    const signUp = () => {
        props.navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.jumbotron}>Coffee Chat</Text>
                <FormInput
                    label="Please Insert Your Username"
                    style={styles}
                    value={username}
                    returnKeyType="next"
                    onChangeText={(val) => setUsername(val)}
                    type={'username'}
                    name="username"
                />
                <FormInput
                    label="Please Insert Your Password"
                    style={styles}
                    value={password}
                    returnKeyType="next"
                    onChangeText={(val) => setPassword(val)}
                    type="password"
                    name="password"
                />
                <View style={styles.horizontalDisplay}>
                    <Button
                        title="Sign In"
                        onPress={login}
                        style={styles}
                    /><Button
                        title="Sign Up"
                        onPress={signUp}
                        style={styles}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jumbotron: {
        fontSize: 24,
        marginBottom: 22,
        textAlign: 'center'
    },
    btnPrimary: {
        backgroundColor: 'blue',
        elevation: 3,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 22,
        alignSelf: 'center'
    },
    txtWhite: {
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 2,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    formGroup: {
        width: '100%',
        marginBottom: 22
    },
    formInput: {
        borderColor: '#aaa',
        borderWidth: 0.9,
        paddingHorizontal: 15,
        marginHorizontal: 22,
        borderRadius: 5
    },
    horizontalDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch'
    },
    textValidation: {
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5
    }
})

export default Login;