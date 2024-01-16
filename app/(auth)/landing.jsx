import { SafeAreaView, Text  } from 'react-native';
import {  useLoginState } from '../../components/UserProvider.jsx';

export default function Landing() {
  const loginState = useLoginState();
  console.log('got login state in Landing', loginState);
  
  if (loginState == null) {
    return <SafeAreaView><Text style={{fontSize: 36 }}>Splash</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView>
      <Text style={{fontSize: 36 }}>Landing</Text>
    </SafeAreaView>
  );
}