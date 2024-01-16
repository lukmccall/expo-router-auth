import { UserProvider } from '../components/UserProvider.jsx';
import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(bottomtabs)',
};

export default function AppLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen
          name="(bottomtabs)"
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          name="(auth)/landing"
          options={{
            animation: 'none', // I think that looks better, but feel free to change it
          }}
          />
      </Stack>
    </UserProvider>
  );
}
