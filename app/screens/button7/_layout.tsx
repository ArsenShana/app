// screens/button7/_layout.tsx
import { Stack } from 'expo-router';

export default function Button7Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="services" />
      <Stack.Screen name="docs" />
      <Stack.Screen name="zai" />
    </Stack>
  );
}
