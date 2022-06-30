import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Service from '../screens/Service';
import Contact from '../screens/Contact';
import { Appbar } from 'react-native-paper'
// import icon
import Ionicons from 'react-native-vector-icons/FontAwesome';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? 'home'
                                        : 'home'
                                }
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Realisation') {
                        return (
                            <Ionicons
                                name={focused ? 'image' : 'image'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Service') {
                        return (
                            <Ionicons
                                name={focused ? 'navicon' : 'navicon'}
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Contact') {
                        return (
                            <Ionicons
                                name={focused ? 'info' : 'info'}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#D60C67',
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                //Nous indiquons des options qui ne seront appliqué que à cette page
                //Si nous voulions appliqué ces options sur toutes les pages sans distinctions, il aurait fallu appelé les options dans Tab.Navigator
                options={{
                    //Nous indiquons ici que notre header correspond au composant dans notre fonction
                    header: () => (
                        //Appbar.Header permet de créer un appBar en haut de l'application
                        <Appbar.Header style={{ backgroundColor: '#D60C67' }}>
                            {/* Ici nous lui indiquons que le contenue de cette barre est un titre contenant 'Activity Tracker' */}
                            <Appbar.Content title="Au Jardin d'Ann'Iris Fleuriste"></Appbar.Content>
                        </Appbar.Header>
                    ),
                }}
            />
            <Tab.Screen name="Realisation" component={StackNavigator}//Nous indiquons des options qui ne seront appliqué que à cette page
                //Si nous voulions appliqué ces options sur toutes les pages sans distinctions, il aurait fallu appelé les options dans Tab.Navigator
                options={{
                    //Nous indiquons ici que notre header correspond au composant dans notre fonction
                    header: () => (
                        //Appbar.Header permet de créer un appBar en haut de l'application
                        <Appbar.Header style={{ backgroundColor: '#D60C67' }}>
                            {/* Ici nous lui indiquons que le contenue de cette barre est un titre contenant 'Activity Tracker' */}
                            <Appbar.Content title="Au Jardin d'Ann'Iris Fleuriste"></Appbar.Content>
                        </Appbar.Header>
                    ),
                }} />
            <Tab.Screen name="Service" component={Service}//Nous indiquons des options qui ne seront appliqué que à cette page
                //Si nous voulions appliqué ces options sur toutes les pages sans distinctions, il aurait fallu appelé les options dans Tab.Navigator
                options={{
                    //Nous indiquons ici que notre header correspond au composant dans notre fonction
                    header: () => (
                        //Appbar.Header permet de créer un appBar en haut de l'application
                        <Appbar.Header style={{ backgroundColor: '#D60C67' }}>
                            {/* Ici nous lui indiquons que le contenue de cette barre est un titre contenant 'Activity Tracker' */}
                            <Appbar.Content title="Au Jardin d'Ann'Iris Fleuriste"></Appbar.Content>
                        </Appbar.Header>
                    ),
                }} />
            <Tab.Screen name="Contact" component={Contact}//Nous indiquons des options qui ne seront appliqué que à cette page
                //Si nous voulions appliqué ces options sur toutes les pages sans distinctions, il aurait fallu appelé les options dans Tab.Navigator
                options={{
                    //Nous indiquons ici que notre header correspond au composant dans notre fonction
                    header: () => (
                        //Appbar.Header permet de créer un appBar en haut de l'application
                        <Appbar.Header style={{ backgroundColor: '#D60C67' }}>
                            {/* Ici nous lui indiquons que le contenue de cette barre est un titre contenant 'Activity Tracker' */}
                            <Appbar.Content title="Au Jardin d'Ann'Iris Fleuriste"></Appbar.Content>
                        </Appbar.Header>
                    ),
                }} />
        </Tab.Navigator>
    )
}

