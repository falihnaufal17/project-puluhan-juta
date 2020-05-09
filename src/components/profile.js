import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../publics/redux/actions/users'
import Splash from './splash';

const Profile = (props) => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfileStorage = async () => {
            try {
                let data = await AsyncStorage.getItem('profile');
                setProfile(JSON.parse(data));
            } catch (e) {
                console.log(error);
            }
        }
        fetchProfileStorage();
    }, [])

    console.log(profile)

    const Logout = (id) => {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('profile')
        props.logout(id);
    }

    if (profile !== null) {
        return (
            <View
                style={styles.container}
            >
                <Text>Hello Detail React Native</Text>
                <Text>Id: {profile.id}</Text>
                <Text>Full Name: {profile.fullname}</Text>
                <Text>Phone Number: {profile.phone}</Text>
                <Text>Username: {profile.username}</Text>
                <Button
                    title="Logout"
                    onPress={() => Logout(profile.id)}
                />
            </View>
        )
    } else {
        return <Splash />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = d => {
    return {
        logout: (id) => {
            d(logout(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Profile);