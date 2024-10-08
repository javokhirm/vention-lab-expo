import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'red',
            headerStyle: {
                backgroundColor: '#000000',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '000000',
            },
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={'home-sharp'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="sections" options={{
                title: 'News', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={'newspaper-outline'} color={color} size={24} />
                ),
            }} />
        </Tabs>
    );
}