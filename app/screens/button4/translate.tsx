import { View, Text, StyleSheet } from 'react-native';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Переводы</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});
