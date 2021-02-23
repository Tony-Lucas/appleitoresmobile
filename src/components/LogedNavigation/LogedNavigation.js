import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from './components/Feed/Feed';
import Amigo from './components/Amigo/Amigo';
import Livro from './components/Livro/Livro';
import Profile from './components/Profile/Profile';

const Tab = createMaterialBottomTabNavigator();
import SvgIcon from 'react-native-svg-icon';
import Svg, { Path } from "react-native-svg"
import FeedIcon from '../../../assets/icons/FeedIcon'

export default function LogedNavigation({ props, navigation }) {


    return (
        <Tab.Navigator initialRouteName="Feed" barStyle={{ backgroundColor: "#fff", paddingBottom: 7, paddingTop: 7 }} activeColor="#8962F8" inactiveColor="#CFBEFF" >
            <Tab.Screen name="Feed" component={Feed} options={{
                tabBarLabel: "",
                tabBarColor: "#ffffff",
                tabBarIcon: ({ color }) => (
                    <Svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.81 2h8.381C19.28 2 21 3.78 21 6.83v10.33c0 3.1-1.72 4.84-4.809 4.84H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2zm.27 4.66v-.01h2.989c.431 0 .781.35.781.779 0 .441-.35.791-.781.791H8.08a.78.78 0 010-1.56zm0 6.08h7.84a.781.781 0 000-1.561H8.08a.781.781 0 000 1.561zm0 4.57h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79H8.08a.795.795 0 00-.75 1.21c.16.25.45.4.75.36z"
                            fill={color}
                        />
                    </Svg>
                ),

            }} />
            <Tab.Screen name="Livro" component={Livro} options={{
                tabBarLabel: "",
                tabBarColor: "#ffffff",
                tabBarIcon: ({ color }) => (

                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <Path
                            d="M18 16H3a1 1 0 000 2h15v2H3a3 3 0 01-3-3V2a2 2 0 012-2h16v16zm-5-9V5H5v2h8z"
                            fill={color}
                        />
                    </Svg>
                ),

            }} />
            <Tab.Screen name="Amigo" component={Amigo} options={{
                tabBarLabel: "",
                tabBarColor: "#ffffff",
                tabBarIcon: ({ color }) => (

                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <Path
                            d="M10 9a5 5 0 015 5v6H5v-6a5 5 0 015-5zm-6.712 3.006a6.984 6.984 0 00-.28 1.65L3 14v6H0v-4.5a3.5 3.5 0 013.119-3.48l.169-.014zm13.424 0A3.501 3.501 0 0120 15.5V20h-3v-6c0-.693-.1-1.362-.288-1.994zM3.5 6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM10 0a4 4 0 110 8 4 4 0 010-8z"
                            fill={color}
                        />
                    </Svg>
                ),

            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "",
                tabBarColor: "#ffffff",
                tabBarIcon: ({ color }) => (
                    <Svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <Path
                            d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM6.357 18h11.49a6.992 6.992 0 00-5.745-3 6.992 6.992 0 00-5.745 3zM12 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                            fill={color}
                        />
                    </Svg>
                ),

            }} />

        </Tab.Navigator>
    )
}