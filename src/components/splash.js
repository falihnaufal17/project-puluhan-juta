import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const Splash = props => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="brown" style={{ marginBottom: 20 }} />
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