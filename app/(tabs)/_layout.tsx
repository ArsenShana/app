import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  return (
    
    <Tabs 
      screenOptions={{
        headerShown: false, // убираем стандартный header
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopColor: '#e5e5e5',
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarButton: HapticTab,
      }}
    >
      {/* Табы */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/home.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Kaspi QR',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/qr.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
         options={{
          title: 'Сообщения',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/msg.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />

       <Tabs.Screen
        name="servi"
         options={{
          title: 'Сервисы',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/icons/burger.png')}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
    
  );
}
