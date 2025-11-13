import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { theme } from "../constants/theme";

export function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: "Jogo da Forca",
      description:
        "Implementação do Jogo da Forca em JavaScript, React e React Native.",
      link: "/forca",
      image: require("../assets/banner_forca.png"),
      tags: ["React", "React Native", "JavaScript"],
      status: "Concluído",
    },
  ];

  return (
    <View style={styles.projectsSection}>
      <Text style={styles.heading}>Meus Projetos</Text>
      <Text style={styles.subtitle}>
        Projetos que desenvolvi para aprimorar habilidades
      </Text>

      <View style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            {project.image && (
              <Image source={project.image} style={styles.projectImage} />
            )}
            <View style={styles.statusBadge}>
              <MaterialCommunityIcons
                name="check-circle"
                size={16}
                color="#fff"
              />
              <Text style={styles.statusText}>{project.status}</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>

              <View style={styles.tagsContainer}>
                {project.tags.map((tag, tagIndex) => (
                  <View key={tagIndex} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={styles.projectButton}
                activeOpacity={0.8}
                onPress={() => router.push(project.link as any)}
              >
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.projectButtonText}>Ver Projeto</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projectsSection: {
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
  projectsGrid: {
    gap: theme.spacing.md,
  },
  projectCard: {
    backgroundColor: theme.colors.headerBackground,
    borderRadius: theme.radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.primary + "15",
    marginBottom: theme.spacing.md,
  },
  projectImage: {
    width: "100%",
    height: 180,
  },
  statusBadge: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: "#fff",
  },
  cardContent: {
    padding: theme.spacing.md,
  },
  projectTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  projectDescription: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: "#999",
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  tag: {
    backgroundColor: theme.colors.primary + "15",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.primary + "30",
  },
  tagText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.primary,
  },
  projectButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.sm,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  projectButtonText: {
    fontFamily: theme.fonts.bold,
    color: "#fff",
    fontSize: 14,
  },
});
