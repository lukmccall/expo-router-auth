import { Button, SafeAreaView, Text  } from 'react-native';
import {  useLoginState, useUserControls } from '../../components/UserProvider.jsx';
import { Link } from 'expo-router';

export default function Landing() {
  const loginState = useLoginState();
  const {login} = useUserControls();
  
  // User is logged in, redirect to home 
  if (loginState === true) { 
    return <Link replace href="(bottomtabs)"/>;
  }

  // We can't determine the user's auth state yet, show a splash screen
  if (loginState === undefined) {
    return <SafeAreaView><Text style={{fontSize: 36 }}>Splash</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView>
      <Text style={{fontSize: 36 }}>Landing</Text>
      <Button title="login" onPress={() => {
        login();
      }} />
    </SafeAreaView>
  );
}