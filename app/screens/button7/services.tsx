import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import Docs from './docs';
import Zai from './zai';

const TABS = ['Все услуги', 'Моя заявка'];
const TAB_WIDTH = 160;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Services() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderTranslateX = useRef(new Animated.Value(0)).current;
  const contentTranslateX = useRef(new Animated.Value(0)).current;

  const onTabPress = (index: number) => {
    setActiveIndex(index);

    // Анимация белой плашки на кнопках
    Animated.spring(sliderTranslateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
      speed: 18,
      bounciness: 6,
    }).start();

    // Анимация смены контента
    Animated.spring(contentTranslateX, {
      toValue: -index * SCREEN_WIDTH,
      useNativeDriver: true,
      speed: 18,
      bounciness: 6,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
    <View style={styles.head}>
      {/* Хедер */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Image
            source={require('@/assets/icons/back.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Госуслуги</Text>
        <View style={styles.rightPlaceholder} />
      </View>

      {/* Переключатель */}
      <View style={styles.tabsWrapper}>
        <View style={styles.tabsContainer}>
          <Animated.View
            style={[styles.activeTab, { transform: [{ translateX: sliderTranslateX }] }]}
          />
          {TABS.map((tab, index) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              activeOpacity={0.8}
              onPress={() => onTabPress(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeIndex === index && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.searchContainer}>
                <Image
                  source={require('@/assets/icons/search.png')}
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Поиск по Госуслугам"
                  placeholderTextColor="#999"
                />
              </View>
    </View>

      {/* Контент с анимацией */}
      <View style={styles.contentWrapper}>
        <Animated.View
          style={[styles.contentSlider, { transform: [{ translateX: contentTranslateX }] }]}
        >
          <View style={styles.page}>
            <Docs />
          </View>
          <View style={styles.page}>
            <Zai />
          </View>
        </Animated.View>
      </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#e5e5e5',
  },
  container: { flex: 1, backgroundColor: '#ffffffff' },
   divider: {
  height: 1,
  backgroundColor: '#ffffffff',
  marginHorizontal: 0,
  marginVertical: 5,
},
  /* Header */
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },

   head: {
    paddingTop: 10,    // отступ сверху
    paddingBottom: 30,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
   },
  backButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  backIcon: { width: 24, height: 24 },
  headerTitle: { fontSize: 15, fontWeight: '600', flex: 1, textAlign: 'center' },
  rightPlaceholder: { width: 40, height: 40 },

  /* Tabs */
  tabsWrapper: { alignItems: 'center', marginTop: 5 },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 14,
    padding: 0.5,
    width: TAB_WIDTH * 2,
    position: 'relative',
  },
  activeTab: {
    position: 'absolute',
    width: TAB_WIDTH,
    height: '95%',
    backgroundColor: 'rgba(255, 255, 255, 1)000ff',
    borderRadius: 12,
    elevation: 3,
    paddingBottom: 10,
  },
  tab: { width: TAB_WIDTH, alignItems: 'center', justifyContent: 'center', paddingVertical: 12, zIndex: 1 },
  tabText: { fontSize: 15, color: '#777', fontWeight: '500' },
  activeTabText: { color: '#000', fontWeight: '600' },

  /* Контент */
  contentWrapper: { flex: 1, overflow: 'hidden' },
  contentSlider: { flexDirection: 'row', width: SCREEN_WIDTH * 2, flex: 1 },
  page: { width: SCREEN_WIDTH, flex: 1 },

  // Поиск
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
    paddingTop: 12,
    paddingBottom: 12,
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: -15,
  },
  icon: {
    width: 18,
    height: 20,
    marginRight: 8,
    tintColor: '#888',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
