import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Splash = props => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Login')
        }, 1500)
    }, [])
    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash;