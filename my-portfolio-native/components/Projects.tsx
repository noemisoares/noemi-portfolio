// components/Projects.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { theme } from "../constants/theme";

export function Projects() {
  const projects = [
    {
      name: "Chat de Aprendizado",
      description: "Aplicação de chat com IA para estudo colaborativo.",
      url: "https://github.com/noemisoares/chat-learn",
    },
    {
      name: "Adaptador de Provas TDAH",
      description: "App para adaptar provas para alunos com TDAH.",
      url: "https://github.com/noemisoares/adapt-provas",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos Recentes</Text>
      {projects.map((project) => (
        <TouchableOpacity
          key={project.name}
          onPress={() => Linking.openURL(project.url)}
          style={styles.card}
        >
          <Text style={styles.name}>{project.name}</Text>
          <Text style={styles.description}>{project.description}</Text>
        </TouchableOpacity>
      ))}
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
    marginBottom: 12,
  },
  card: {
    backgroundColor: theme.colors.headerBackground,
    padding: 16,
    borderRadius: theme.radius.md,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    color: theme.colors.text,
  },
  description: {
    color: "#ccc",
    marginTop: 4,
  },
});
