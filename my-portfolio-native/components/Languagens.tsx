import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");
const COLUMNS = 2;
const PADDING = theme.spacing.md;
const CARD_WIDTH = (width - PADDING * 4 - theme.spacing.sm) / COLUMNS;

export function Languagens() {
  const techs = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "arrow-right" },
    { name: "Java", icon: "language-java" },
    { name: "C", icon: "language-c" },
    { name: "Python", icon: "language-python" },
    { name: "TypeScript", icon: "language-typescript" },
    { name: "HTML", icon: "language-html5" },
    { name: "CSS", icon: "language-css3" },
    { name: "SQL", icon: "database" },
    { name: "React Native", icon: "react" },
    { name: "Git", icon: "git" },
    { name: "Linux", icon: "linux" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tecnologias & Ferramentas</Text>
      <Text style={styles.subtitle}>Linguagens e tecnologias que domino</Text>

      <View style={styles.grid}>
        {techs.map((tech) => (
          <View key={tech.name} style={[styles.card, { width: CARD_WIDTH }]}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name={tech.icon as any}
                size={32}
                color={theme.colors.primary}
              />
            </View>
            <Text style={styles.techName}>{tech.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
  heading: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#888",
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
  },
  card: {
    backgroundColor: theme.colors.headerBackground,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.primary + "20",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: theme.colors.primary + "10",
    justifyContent: "center",
    alignItems: "center",
  },
  techName: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    textAlign: "center",
  },
});
