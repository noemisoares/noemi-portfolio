import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../constants/theme";

export function Resume() {
  const education = [
    {
      icon: "graduation-cap",
      title: "Ciência da Computação",
      subtitle: "Universidade Católica de Pernambuco (UNICAP)",
    },
    {
      icon: "code",
      title: "Desenvolvimento Web",
      subtitle: "React, Next.js, HTML, CSS",
    },
    {
      icon: "pencil-square-o",
      title: "Design de Interfaces",
      subtitle: "UX/UI, Prototipação e Usabilidade",
    },
    {
      icon: "flask",
      title: "Pesquisa Tecnológica",
      subtitle: "Projetos extensionistas e inovação",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Formação Acadêmica</Text>
      <Text style={styles.subtitle}>
        Educação e experiências que formam meu perfil profissional
      </Text>

      <View style={styles.cardsContainer}>
        {education.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name={item.icon as any}
                  size={24}
                  color={theme.colors.primary}
                />
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
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
  cardsContainer: {
    gap: theme.spacing.md,
  },
  card: {
    backgroundColor: theme.colors.headerBackground,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: theme.colors.primary + "15",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    flex: 1,
    marginTop: -18,
  },
  cardSubtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#999",
    lineHeight: 18,
    marginTop: -24,
    marginLeft: 48,
  },
});
