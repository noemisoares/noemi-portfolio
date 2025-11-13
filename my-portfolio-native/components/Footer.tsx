import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../constants/theme";

export function Footer() {
  const socialLinks = [
    { icon: "github", url: "https://github.com/noemisoares", label: "GitHub" },
    { icon: "linkedin", url: "https://linkedin.com/in/noemisoares", label: "LinkedIn" },
    { icon: "envelope", url: "mailto:noemi@example.com", label: "Email" },
  ];

  return (
    <View style={styles.footer}>
      <View style={styles.contentContainer}>
        <View style={styles.locationSection}>
          <FontAwesome name="map-marker" size={18} color={theme.colors.primary} />
          <Text style={styles.locationText}>Recife, PE</Text>
        </View>

        <View style={styles.socialSection}>
          <Text style={styles.socialLabel}>Conecte-se:</Text>
          <View style={styles.socialLinks}>
            {socialLinks.map(({ icon, url, label }) => (
              <TouchableOpacity
                key={icon}
                onPress={() => Linking.openURL(url)}
                style={styles.socialButton}
                activeOpacity={0.7}
              >
                <FontAwesome name={icon as any} size={24} color={theme.colors.primary} />
                <Text style={styles.socialButtonLabel}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.copyright}>
          © {new Date().getFullYear()} Noemi Soares
        </Text>
        <Text style={styles.rights}>Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.headerBackground,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.primary + "20",
  },
  contentContainer: {
    alignItems: "center",
    gap: theme.spacing.md,
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  locationText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.primary,
  },
  socialSection: {
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  socialLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.text,
  },
  socialLinks: {
    flexDirection: "row",
    gap: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  socialButton: {
    alignItems: "center",
    gap: 4,
  },
  socialButtonLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.text,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.primary + "30",
    width: "100%",
    marginVertical: theme.spacing.sm,
  },
  copyright: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.primary,
    textAlign: "center",
  },
  rights: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.text,
    textAlign: "center",
  },
});
