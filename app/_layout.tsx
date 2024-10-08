import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'slide_from_right', animationDuration: 1000 }}  />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}

