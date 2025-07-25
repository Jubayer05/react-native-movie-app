import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-url-polyfill/auto';

const RootLayout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/(screens)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
