import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import * as LocalAuthentication from 'expo-local-authentication';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TestIcon from '../../assets/icons/buttons/test.svg';
import Icon2 from '../../assets/icons/buttons/icon2.svg';
import Icon3 from '../../assets/icons/buttons/iocn3.svg';
import Icon4 from '../../assets/icons/buttons/icon4.svg';
import Icon6 from '../../assets/icons/buttons/icon6.svg';
import Icon7 from '../../assets/icons/buttons/iocn7.svg';
import Icon8 from '../../assets/icons/buttons/icon8.svg';
// import { useEffect } from 'react';


export default function HomeScreen() {
  const router = useRouter();


//   useEffect(() => {
//   (async () => {
//     const success = await authenticate();
//     if (!success) {
//       // если биометрия не пройдена, можно выйти или показать сообщение
//       alert('Авторизация не пройдена');
//       // router.replace('/') // например, вернуться на экран логина
//     }
//   })();
// }, []);


  const buttons = [
  { title: "Магазин", goTo: "/screens/button7/services", icon: TestIcon }, // SVG
  { title: "Мой Банк", goTo: "/screens/button7/services", icon: Icon2 },
  { title: "Платежи", goTo: "/screens/button7/services", icon: Icon3 },
  { title: "Переводы", goTo: "/screens/button4/translate", icon: Icon4 },
  { title: "Magnum", goTo: "/screens/button7/services", icon: require('../../assets/icons/buttons/icon5.jpg') },
  { title: "Travel", goTo: "/screens/button7/services", icon: Icon6 },
  { title: "Госуслуги", goTo: "/screens/button7/services", icon: Icon7 },
  { title: "Объявления", goTo: "/screens/button7/services", icon: Icon8 },
];



  const buttons2 = [
    { title: 'Расрочка 0-0-12', icon: require('../../assets/icons/panel1.png') },
    { title: 'Накопительный\nДепозит', icon: require('../../assets/icons/panel4.png') },
    { title: 'Погасите выгодно', icon: require('../../assets/icons/panel5.png') },
    { title: 'Кредить наличными', icon: require('../../assets/icons/panel2.png') },
    { title: 'Kaspi депозить 15%', icon: require('../../assets/icons/panel3.png') },
    { title: 'Кредит на Покупки', icon: require('../../assets/icons/panel6.png') },
  ];


  const cards = [
    { id: 1, image: require("../../assets/scroll/scroll1.png") },
    { id: 2, image: require("../../assets/scroll/scroll2.png") },
    { id: 3, image: require("../../assets/scroll/scroll1.png") },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.searchContainer}>
        <Image
          source={require('@/assets/icons/search.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Поиск по Kaspi.kz"
          placeholderTextColor="#999"
        />
      </View>
      <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20, marginBottom: -18, }}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 16 }}
      >
        {cards.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>

     <View style={styles.grid}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.gridItem}
          activeOpacity={0.7}
          onPress={() => router.push(item.goTo)} // Переход к экрану
        >
          <View style={styles.iconContainer}>
            {item.icon && (
              typeof item.icon === 'function'
                ? <item.icon width={30} height={30} />  // SVG
                : <Image source={item.icon} style={styles.iconImage} resizeMode="contain" /> // PNG/JPG
            )}
          </View>
          <Text style={styles.gridText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
      <View style={styles.divider} />

      </View>
      
      <View >

        {/* Первый скрол */}
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
  {chunk(buttons2, 2).map((row, rowIndex) => (
    <View key={rowIndex} style={{ flexDirection: 'column', marginRight: 16 }}>
      {row.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.horizontalItem}
          activeOpacity={0.7}
          onPress={() => console.log(item.title)}
        >
          {item.icon && <Image source={item.icon} style={styles.itemIcon} resizeMode="contain" />}
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  ))}
</ScrollView>


      </View>

    </SafeAreaView>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}


// async function authenticate() {
//   // Проверяем, есть ли биометрия на устройстве
//   const hasHardware = await LocalAuthentication.hasHardwareAsync();
//   if (!hasHardware) {
//     alert('Ваше устройство не поддерживает биометрическую аутентификацию');
//     return false;
//   }

//   // Проверяем, есть ли зарегистрированные данные (лицо или отпечаток)
//   const isEnrolled = await LocalAuthentication.isEnrolledAsync();
//   if (!isEnrolled) {
//     alert('Нет зарегистрированных данных для биометрии');
//     return false;
//   }

//   // Запускаем проверку
//   const result = await LocalAuthentication.authenticateAsync({
//     promptMessage: 'Авторизация через Face ID',
//     fallbackLabel: 'Использовать пароль', // для iOS
//     disableDeviceFallback: false, // позволяет использовать PIN/пароль при неудаче
//   });

//   return result.success;
// }


const styles = StyleSheet.create({
  divider: {
  height: 1,
  backgroundColor: '#e5e5e5',
  marginHorizontal: 0,
  marginVertical: 5,
},
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
    marginHorizontal: 16,
    marginTop: 0,
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
  card: {
    width: 165,
    height: 100,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
    backgroundColor: "#000000ff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    cardDivider: {
    width: 1,
    height: 80,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  gridItem: {
    width: "22%",
    alignItems: "center",
    marginBottom: 10,
  },
    gridText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#222',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    overflow: "hidden",
  },
  iconImage: {
    borderRadius: 8,
    width: "70%",
    height: "70%",
  },

  // Воторй скрол
    horizontalScroll: {
    paddingVertical: 10,
    marginTop: 20,
  },
  // контейнер для одного "столбца" с 2 кнопками
  columnContainer: {
    flexDirection: 'column',
    marginRight: 16, // отступ между столбцами
  },
  // каждая кнопка
  horizontalItem: {
    flexDirection: 'row', // картинка слева, текст справа
    alignItems: 'center',
    backgroundColor: '#ffffffff', // фон кнопки
    borderRadius: 12,
    padding: 8,
    marginBottom: -12, // отступ между кнопками в столбце
    minWidth: 120, // минимальная ширина кнопки
  },
  itemIcon: {
    width: 50,   // ширина картинки
    height: 50,  // высота картинки
    marginRight: 10, // расстояние между картинкой и текстом
    borderRadius: 8, // скругление если нужно
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    flexShrink: 1, // чтобы текст не выходил за пределы кнопки
  },



});
