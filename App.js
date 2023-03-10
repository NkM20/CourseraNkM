import * as React from 'react';
import { View, Text } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';
 export default function App() {
   return (
<View style={{flex: 1, backgroundColor: '#495E57',}}>
  <LittleLemonHeader/>
</View>
   );
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
