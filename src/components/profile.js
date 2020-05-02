import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Profile = (props) => {
    const backHome = () => {
        props.navigation.goBack();
    }

    const { name, phone, username } = props.route.params
    return (
        <View
            style={styles.container}
        >
            <Text>Hello Detail React Native</Text>
            <Text>Full Name: {name}</Text>
            <Text>Phone Number: {phone}</Text>
            <Text>Username: {username}</Text>
            <Button
                title="Go back to home"
                onPress={() => backHome()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center'
    }
})

export default Profile;