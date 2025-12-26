// screens/button4/_layout.tsx
import { Stack } from 'expo-router';

export default function Button4Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="translate" />
    </Stack>
  );
}
