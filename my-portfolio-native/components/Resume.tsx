// components/Resume.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export function Resume() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text style={styles.text}>
        🎓 Ciência da Computação — Universidade Católica de Pernambuco (UNICAP)
      </Text>
      <Text style={styles.text}>
        💡 Foco em desenvolvimento web, design de interfaces e pesquisa em tecnologia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    color: theme.colors.text,
    fontSize: 14,
    marginBottom: 4,
  },
});
