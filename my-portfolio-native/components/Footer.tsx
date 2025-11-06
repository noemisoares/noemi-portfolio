// components/Footer.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        © {new Date().getFullYear()} Noemi Soares — Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 32,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#333",
    alignItems: "center",
  },
  text: {
    color: theme.colors.text,
    fontSize: 14,
    textAlign: "center",
  },
});
