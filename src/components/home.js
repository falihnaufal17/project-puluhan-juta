import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from './utilities/formInput';
import Button from './utilities/button';

const Home = props => {
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
        <View style={styles.container}>
            <Text style={styles.jumbotron}>Coffee Chat</Text>
            <FormInput
                label="Please Insert Your Username"
                style={styles}
                value={username}
                returnKeyType="next"
                onChangeText={(val) => setUsername(val)}
                type={'username'}
            />
            <FormInput
                label="Please Insert Your Password"
                style={styles}
                value={password}
                returnKeyType="next"
                onChangeText={(val) => setPassword(val)}
                type="password"
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 22
    },
    jumbotron: {
        fontSize: 24,
        marginBottom: 22,
        textAlign: 'center'
    },
    btnPrimary: {
        borderRadius: 10,
        backgroundColor: 'blue',
        elevation: 6,
        width: 100,
        height: 30,
        justifyContent: 'center',
        marginBottom: 22,
        alignSelf: 'center'
    },
    txtWhite: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    label: {
        fontSize: 14,
        marginBottom: 5
    },
    formGroup: {
        width: '100%',
        marginBottom: 14
    },
    formInput: {
        borderColor: 'blue',
        borderWidth: 0.9,
        paddingHorizontal: 12,
        height: 40,
        borderRadius: 5,
    },
    horizontalDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Home;