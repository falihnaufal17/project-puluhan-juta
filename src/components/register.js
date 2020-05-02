import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FormInput from './utilities/formInput';
import Button from './utilities/button';

const Register = props => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUp = () => {
        const formData = {
            name,
            phone,
            username,
            password
        }
        if (!name || !phone || !username || !password || !confirmPassword) {
            alert("Please fill the form correctly!")
        } else {
            props.navigation.navigate('Profile', formData)
            setName('')
            setPhone('')
            setUsername('')
            setPassword('')
            setConfirmPassword('')
        }
    }

    const goBack = () => {
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.jumbotron}>Coffee Chat</Text>
                <FormInput
                    label="Please Insert Your Name"
                    style={styles}
                    value={name}
                    returnKeyType="next"
                    onChangeText={(val) => setName(val)}
                />
                <FormInput
                    label="Please Insert Your Phone Number"
                    style={styles}
                    value={phone}
                    returnKeyType="next"
                    onChangeText={(val) => setPhone(val)}
                    type="number"
                />
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
                <FormInput
                    label="Please Insert Your Confirm Password"
                    style={styles}
                    value={confirmPassword}
                    returnKeyType="done"
                    onChangeText={(val) => setConfirmPassword(val)}
                    type="password"
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button
                        title="Sign Up"
                        onPress={signUp}
                        style={styles}
                    />
                    <View>
                        <Text>Have account?</Text>
                        <TouchableOpacity onPress={goBack}><Text> go sign in!</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
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
})

export default Register;