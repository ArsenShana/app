import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';


export default function Docs() {
  const buttons = [
  {
    id: 1,
    image: require('@/assets/ID.png'),
    title: 'Удостоверение личности',
    route: '/screens/button7/idcard',
  },
  {
    id: 2,
    image: require('@/assets/ID.png'),
    title: 'Водительское удостоверение',
    route: '/screens/button7/idcard',
  },
];

  const handlePress = () => {
    Alert.alert('В разработке', 'Экран временно недоступен');
  };

  return (
    <View style={styles.box}>
      <StatusBar style="dark" />
      <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.scrollContainer}
>
  {buttons.map((btn) => (
    <TouchableOpacity
      key={btn.id}
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => router.push(btn.route)}
    >
      <Image
        source={btn.image}
        style={styles.topImage}
        resizeMode="contain"
      />

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{btn.title}</Text>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>


      <TouchableOpacity
        style={styles.panel}
        activeOpacity={0.7}
        onPress={handlePress}
      >
        <Text style={styles.text}>Все документы</Text>
        <Image
          source={require('@/assets/icons/right.png')}
          style={styles.rightIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    paddingVertical: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  scrollContainer: {
    paddingHorizontal: 16,
  },

  card: {
    width: 140,
    borderRadius: 12,
    backgroundColor: '#e9e9e9',
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
    paddingVertical: 10,
  },

  topImage: {
    width: 60,
    height: 30,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleWrapper: {
  paddingRight: 10,
  paddingLeft: 8,
  width: '100%',
},

  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
  },

  panel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A90E2',
  },

  rightIcon: {
    width: 24,
    height: 24,
    tintColor: '#4A90E2',
  },
});