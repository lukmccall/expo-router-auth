import { Button, SafeAreaView, Text } from 'react-native';
import {  useUserControls } from '../../../components/UserProvider.jsx';
import {  useRouter } from 'expo-router';

export default function Home() {
  const {logout} = useUserControls();
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text style={{fontSize: 36}}>Home</Text>
      <Button title="logout" onPress={() => {
        // We want to logout.
        // We know that we're going to be redirected to the landing page after logout.
        // To not shouw the splash screen, we're redirecting to the landing page manually.
        router.replace(`/landing`);
        logout();
      }} />
    </SafeAreaView>
  );
}