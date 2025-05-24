import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { Platform } from 'react-native';

export default function RootLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false, 
                tabBarActiveTintColor: '#02929A', 
                tabBarInactiveTintColor: '#CFD3D3',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    width: '90%',
                    marginLeft: '5%',
                    height: 70,
                    borderRadius: 18,
                    paddingBottom: Platform.OS === 'android' ? 10 : 20,
                    paddingTop: 10,
                    shadowColor: '#000'
                },
                tabBarLabelStyle: {
                    display: 'none'
                }
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'globe-sharp' : 'globe-outline'} color={color} size={24} />
                    )
                }} 
            />

            <Tabs.Screen
                name="search" 
                options={{ 
                    title: 'Search',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={ focused ? 'search-outline' : 'search-sharp'} color={color} size={24} />
                    )
                }} 
            />
        </Tabs>
    );
}