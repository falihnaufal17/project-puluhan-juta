import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = props => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="go to profile"
                onPress={() => {
                    props.navigation.navigate('Profile');
                }}
            />
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

export default Home;