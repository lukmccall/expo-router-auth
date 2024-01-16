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
      </Stack>
    </UserProvider>
  );
}
