// components/Languagens.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export function Languagens() {
  const techs = ["React", "Next.js", "Java", "C", "Python", "HTML", "CSS", "SQL"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tecnologias</Text>
      <View style={styles.list}>
        {techs.map((tech) => (
          <Text key={tech} style={styles.tech}>
            • {tech}
          </Text>
        ))}
      </View>
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
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tech: {
    color: theme.colors.text,
    fontSize: 14,
  },
});
