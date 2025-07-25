import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import '../../../global.css';

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="all_movie"
        options={{
          title: 'Movie',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="film" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
