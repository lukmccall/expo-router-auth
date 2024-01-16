import { usePathname, useRouter, useSearchParams, useSegments } from 'expo-router';
import { useEffect, createContext, useState, useContext } from 'react';

export const UserContext = createContext({
  login: () => {},
  logout: () => {},
});

export function useProtectedRoute(loginState) {
  const pathname = usePathname();
  const segments = useSegments();
  const { redirect }: { redirect?: string } = useSearchParams();
  const router = useRouter();
  const inAuthGroup = segments[0] === '(auth)';

  useEffect(() => {
    if (loginState === false && !inAuthGroup) {
      router.replace(`/landing?redirect=${pathname.replace('/--', '')}`);
    } else if (loginState === true && inAuthGroup) {
      router.replace(redirect ?? '/');
    }
  }, [loginState, inAuthGroup, pathname]);
}

export const LoginStateContext = createContext(undefined);

export function useLoginState() {
  return useContext(LoginStateContext);
}


export function useUserControls() {
  return useContext(UserContext);
}

export interface IUserProviderProps {
  children?: React.ReactNode;
}

export function UserProvider({ children }: IUserProviderProps) {
    // undefined = unknown, false = logged_out, true = logged_in
    const [loginState, setLoginState] = useState(undefined);

  useProtectedRoute(loginState);

  useEffect(() => {
    // use 1000ms timeout to simulate the time it takes for us to determine the user's auth state
    setTimeout(() => setLoginState(false), 1000); 
    console.log('setting initial login state in UserProvider')
  }, []);

  return (
    <UserContext.Provider value={{
      login: () => {
        // We are similating the time it takes to login.
        // But firstly, we change the user to undefinded to show a splash screen.
        setLoginState(undefined);
        setTimeout(() => setLoginState(true), 1000)      
      },
      logout: () => setLoginState(false),
    }}>
      <LoginStateContext.Provider value={loginState}>{children}</LoginStateContext.Provider>
    </UserContext.Provider>
  );
}