import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../constants/theme";

type Props = {
  onToggle: () => void;
};

export default function Header({ onToggle }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Noemi Soares</Text>
        <TouchableOpacity onPress={onToggle} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.dark.headerBg,
    zIndex: 50,
  },
  header: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: theme.dark.headerBg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.dark.text,
    fontSize: 18,
    fontWeight: "700",
  },
  menuButton: {
    padding: 6,
  },
  menuIcon: {
    color: theme.dark.text,
    fontSize: 26,
  },
});
