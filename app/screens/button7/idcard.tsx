import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Animated,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import { Asset } from "expo-asset";
import { useRouter } from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;
const TAB_WIDTH = SCREEN_WIDTH * 0.4;
const TABS = ["PDF", "Реквизиты"];

export default function IdScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [pdfUri, setPdfUri] = useState<string | null>(null);
  const sliderTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const asset = Asset.fromModule(require("@/assets/pdfs/sample.pdf"));
    asset.downloadAsync().then(() => {
      setPdfUri(asset.localUri ?? null);
    });
  }, []);

  const onTabPress = (index: number) => {
    setActiveTab(index);
    Animated.spring(sliderTranslateX, {
      toValue: TAB_WIDTH * index,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    alert("В разработке");
  };

  if (!pdfUri) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Image
            source={require("@/assets/icons/back.png")}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Удостоверение личности</Text>
        <View style={styles.rightPlaceholder} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <View style={styles.tabsContainer}>
          <Animated.View
            style={[
              styles.activeTab,
              { transform: [{ translateX: sliderTranslateX }] },
            ]}
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
                  activeTab === index && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentWrapper}>
        {activeTab === 0 ? (
          <WebView
            source={{ uri: pdfUri.startsWith("file://") ? pdfUri : "file://" + pdfUri }}
            style={{ flex: 1 }}
            originWhitelist={["*"]}
          />
        ) : (
          <View style={styles.requisites}>
            <Text style={styles.requisitesText}>
              Здесь будут реквизиты документа
            </Text>
          </View>
        )}
      </View>

      {/* Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={handlePress}>
          <Image source={require("@/assets/icons/qr2.png")} style={styles.buttonIcon} />
          <Text style={[styles.buttonText, styles.primaryButtonText]}>Предъявить документ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={handlePress}>
          <Image source={require("@/assets/icons/right.png")} style={[styles.buttonIcon, { tintColor: "#4A90E2" }]} />
          <Text style={[styles.buttonText, styles.outlineButtonText]}>Отправить документ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* Header */
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  backButton: { width: 40, height: 40, justifyContent: "center", alignItems: "center" },
  backIcon: { width: 24, height: 24 },
  headerTitle: { fontSize: 15, fontWeight: "600", flex: 1, textAlign: "center" },
  rightPlaceholder: { width: 40, height: 40 },

  /* Tabs */
  tabsWrapper: { alignItems: "center", marginTop: 5 },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 14,
    padding: 0.5,
    width: TAB_WIDTH * 2,
    position: "relative",
    marginBottom: 20,
  },
  activeTab: {
    position: "absolute",
    width: TAB_WIDTH,
    height: "95%",
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
  },
  tab: {
    width: TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    zIndex: 1,
  },
  tabText: { fontSize: 15, color: "#777", fontWeight: "500" },
  activeTabText: { color: "#000", fontWeight: "600" },

  /* Content */
  contentWrapper: { flex: 1, overflow: "hidden" },
  requisites: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  requisitesText: { fontSize: 16, color: "#333", textAlign: "center" },

  /* Buttons */
  footer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 60, // новая высота
    paddingHorizontal: 16,
    minWidth: 150,
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonIcon: { width: 24, height: 24, marginRight: 8 },

  /* Синяя кнопка */
  primaryButton: {
    backgroundColor: "#006ce7ff",
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  /* Белая кнопка с синей рамкой */
  outlineButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#006ce7ff",
  },
  outlineButtonText: {
    color: "#006ce7ff",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonText: {
  fontSize: 14,
  fontWeight: "600",
  color: "#333",
},

});
