import { Link, SplashScreen, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function BottomTabsLayout() {
  return (
    <Tabs
      tabBar={({ state, navigation }) => {
        return (
          <Pressable style={{backgroundColor: 'pink'}} text="bottom nav"/>
        );
      }}
      // screenOptions={{
      //   headerShown: false,
      //   tabBarStyle: { position: 'absolute' },
      //   tabBarInactiveTintColor: theme.colors.text,
      //   tabBarActiveTintColor: theme.colors.primary,
      //   lazy: false, // Prevents flash when switching tabs for the first time
      // }}
    />
  );
}
