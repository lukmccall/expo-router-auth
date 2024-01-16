import { Link, SplashScreen, Stack, Tabs } from 'expo-router';
import { Pressable, SafeAreaView, Text } from 'react-native';
import {  useLoginState } from '../../components/UserProvider.jsx';


export default function BottomTabsLayout() {
  const loginState = useLoginState();

  // User is not logged in, so we should show the splash screen
  if (loginState !== true) {
    return <SafeAreaView><Text style={{fontSize: 36 }}>Splash</Text></SafeAreaView>;
  }
  
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
