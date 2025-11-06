import React from "react";
import { View, TouchableOpacity, Linking, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../constants/theme";

export function Social() {
  const socialLinks = [
    { icon: "github", url: "https://github.com/noemisoares" },
    { icon: "linkedin", url: "https://linkedin.com/in/noemisoares" },
    { icon: "envelope", url: "mailto:noemi.soares@example.com" },
  ];

  return (
    <View style={styles.container}>
      {socialLinks.map(({ icon, url }) => (
        <TouchableOpacity key={icon} onPress={() => Linking.openURL(url)}>
          <FontAwesome name={icon as any} size={28} color={theme.colors.primary} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    marginTop: 16,
  },
});
