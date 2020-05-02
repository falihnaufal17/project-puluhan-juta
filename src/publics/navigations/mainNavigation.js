import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../../components/home';
import Profile from '../../components/profile';
import Register from '../../components/register';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;