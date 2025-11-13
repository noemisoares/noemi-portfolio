import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../constants/theme";

type Props = {
  onToggle: () => void;
};

export default function Header({ onToggle }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.avatarPlaceholder}>
            <MaterialCommunityIcons
              name="account-circle"
              size={32}
              color={theme.colors.primary}
            />
          </View>
          <View>
            <Text style={styles.title}>Noemi Soares</Text>
            <Text style={styles.subtitle}>Dev & Designer</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onToggle}
          style={styles.menuButton}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name="menu"
            size={28}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.colors.headerBackground,
    zIndex: 50,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary + "15",
  },
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.headerBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 64,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    flex: 1,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary + "10",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    marginTop: 2,
  },
  menuButton: {
    padding: theme.spacing.sm,
    marginRight: -theme.spacing.sm,
  },
});
