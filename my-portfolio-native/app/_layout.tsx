import { Stack, useRouter } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme, View, StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const currentTheme = isDark ? theme.dark : theme.light;

  const handleNavigate = (sectionId: string) => {
    console.log(`Navegando para: ${sectionId}`);

    router.push({
      pathname: "/",
      params: { sectionToScroll: sectionId },
    });

    setMenuOpen(false);
  };

  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: currentTheme.primary,
      background: currentTheme.background,
      card: currentTheme.headerBg,
      text: currentTheme.text,
      border: "transparent",
      notification: currentTheme.accent,
    },
    fonts: {
      regular: { fontFamily: theme.fonts.regular, fontWeight: "400" as const },
      medium: { fontFamily: theme.fonts.regular, fontWeight: "500" as const },
      bold: { fontFamily: theme.fonts.bold, fontWeight: "700" as const },
      heavy: { fontFamily: theme.fonts.bold, fontWeight: "900" as const },
    },
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <View style={styles.container}>
        <Header onToggle={() => setMenuOpen((s) => !s)} />
        <Sidebar
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={handleNavigate}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="forca/index" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
