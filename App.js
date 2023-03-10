import { StyleSheet, Text, View } from 'react-native';

export default function welcomeApp() {
  return (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Welcome to React Native</Text>


  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
