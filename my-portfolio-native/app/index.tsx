import React, { useEffect, useRef } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { Social } from "../components/Social";
import { Footer } from "../components/Footer";
import { Resume } from "../components/Resume";
import { Projects } from "../components/Projects";
import { Languagens } from "../components/Languagens";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  const scrollViewRef = useRef<ScrollView>(null);
  const params = useLocalSearchParams();

  useEffect(() => {
    if (params.sectionToScroll) {
      const sectionId = params.sectionToScroll as string;
      console.log("Rolando para:", sectionId);

      const positions: any = {
        home: 0,
        about: 0,
        resume: 400,
        tech: 1000,
        projects: 1800,
        contact: 2400,
      };

      const position = positions[sectionId] || 0;

      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: position, animated: true });
      }, 100);
    }
  }, [params.sectionToScroll]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Image
          source={require("../assets/me.png")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Olá, eu sou Noemi Soares</Text>
          <Text style={styles.paragraph}>
            Sou estudante do curso de{" "}
            <Text style={styles.bold}>
              Ciência da Computação da Universidade Católica de Pernambuco
              (UNICAP).
            </Text>{" "}
            Tenho experiência em desenvolvimento web, design de interfaces,
            pesquisas extensionistas e boas práticas de programação. Destaco-me
            por liderança, trabalho em equipe e resolução de problemas, sempre
            com postura proativa e foco em resultados.
          </Text>
          <Social />
        </View>
      </View>

      <View style={styles.section}>
        <Resume />
      </View>

      <View style={styles.section}>
        <Languagens />
      </View>

      <View style={styles.section}>
        <Projects />
      </View>

      <View style={styles.section}>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.lg,
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 90,
    marginBottom: theme.spacing.md,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  paragraph: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: theme.spacing.md,
  },
  bold: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary || theme.colors.accent,
  },
  section: {
    marginTop: theme.spacing.lg,
  },
});
