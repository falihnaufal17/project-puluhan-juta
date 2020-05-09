import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../../components/home';
import Profile from '../../components/profile';
import Register from '../../components/register';
import Login from '../../components/login';
import Splash from '../../components/splash';

const Stack = createStackNavigator();

const MainNavigation = props => {

    useEffect(() => {

        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('token');
            } catch (e) {
                console.log(e)
            }

            props.dispatch({ type: 'RESTORE_TOKEN', token: userToken })
        }

        bootstrapAsync();

    }, [])

    if (props.isLoading) {
        return <Splash />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    props.token == null ? (
                        <>
                            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animationTypeForReplace: props.isSignOut ? 'pop' : 'push' }} />
                            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                        </>
                    ) : (
                            <>
                                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                            </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = s => {
    return {
        token: s.UsersReducer.token,
        isLoading: s.UsersReducer.isLoading,
        isSignOut: s.UsersReducer.isSignOut
    }
}

export default connect(mapStateToProps, null)(MainNavigation);