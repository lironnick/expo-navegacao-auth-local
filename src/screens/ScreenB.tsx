import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useScreenGuard } from '../hooks/useScreenGuard';

export default function ScreenB() {
  const { navigate } = useNavigation();
  useScreenGuard('screenB');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen B</Text>
      <Button 
        title='Ir para a Tela A' 
        onPress={() => navigate('screenA')} 
      />
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
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
