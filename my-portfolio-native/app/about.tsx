import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { theme } from "../constants/theme";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { Asset } from "expo-asset";

const ebookJulia = require("../assets/ebooks/ebook-linguagem-julia.pdf");
const ebookCripto = require("../assets/ebooks/ebook-criptografia-quantica.pdf");

async function openLocalPDF(pdf: any) {
  try {
    const asset = Asset.fromModule(pdf);
    await asset.downloadAsync();

    await WebBrowser.openBrowserAsync(asset.uri);
  } catch (error) {
    console.error("Erro ao abrir PDF:", error);
  }
}

export default function About() {
  const scrollViewRef = useRef<ScrollView>(null);
  const params = useLocalSearchParams();

  useEffect(() => {
    if (params.sectionToScroll) {
      const sectionId = params.sectionToScroll as string;
      const positions: any = { home: 0, contact: 2400 };
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
      contentContainerStyle={{ paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Líder de Pesquisa e Extensão</Text>
          <Text style={styles.itemText}>
            Quantum Lab — USJT Mooca | São Paulo, SP {"\n"}
            <Text style={styles.subDetail}>03/2023 – 06/2023</Text>
          </Text>

          <Text style={styles.bullet}>
            • Coordenação de grupo de pesquisa em criptografia quântica,
            linguagem Julia e segurança da informação.
          </Text>
          <Text style={styles.bullet}>
            • Desenvolvimento de experimentos teóricos integrando criptografia
            moderna e HPC.
          </Text>
          <Text style={styles.bullet}>
            • Participação em discussões sobre tecnologias emergentes e impacto
            na segurança digital.
          </Text>
          <Text style={styles.bullet}>
            • Desenvolvimento e publicação de e-books científicos.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Desenvolvedora Autônoma</Text>
          <Text style={styles.itemText}>
            Recife, PE {"\n"}
            <Text style={styles.subDetail}>02/2024 – Atual</Text>
          </Text>

          <Text style={styles.bullet}>
            • Criação de landing pages responsivas com foco em performance e
            conversão.
          </Text>
          <Text style={styles.bullet}>
            • Automação com Python + Selenium para testes e coleta de dados.
          </Text>
          <Text style={styles.bullet}>
            • Gestão de versão e colaboração com Git/GitHub.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pesquisas e Extensão</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pesquisa em Computação Quântica</Text>
          <Text style={styles.itemText}>
            Liderança de equipe e criação de dois eBooks:
          </Text>

          {/* PDF 1 */}
          <TouchableOpacity onPress={() => openLocalPDF(ebookJulia)}>
            <View style={styles.linkRow}>
              <FontAwesome name="book" size={16} color={theme.colors.accent} />
              <Text style={styles.linkText}>
                Linguagem Julia na Programação Quântica
              </Text>
            </View>
          </TouchableOpacity>

          {/* PDF 2 */}
          <TouchableOpacity onPress={() => openLocalPDF(ebookCripto)}>
            <View style={styles.linkRow}>
              <FontAwesome name="book" size={16} color={theme.colors.accent} />
              <Text style={styles.linkText}>Criptografia Quântica</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Comportamentais</Text>

        <View style={styles.card}>
          <Text style={styles.bullet}>
            • Comunicação clara e eficaz, com experiência em oratória e
            liderança acadêmica
          </Text>
          <Text style={styles.bullet}>
            • Inteligência emocional e foco em resultados sob prazos
          </Text>
          <Text style={styles.bullet}>
            • Aprendizado rápido e adaptabilidade a novas tecnologias
          </Text>
          <Text style={styles.bullet}>
            • Produtividade inteligente e atenção a detalhes
          </Text>
        </View>
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

  section: {
    marginTop: 25,
  },

  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.primary,
    marginBottom: 12,
  },

  card: {
    backgroundColor: theme.colors.headerBackground,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 15,
    padding: theme.spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },

  cardTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.secondary,
    marginBottom: 8,
  },

  itemText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginBottom: 8,
  },

  subDetail: {
    fontFamily: theme.fonts.regular,
    fontStyle: "italic",
    color: theme.colors.text,
    fontSize: 12,
  },

  bullet: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    marginBottom: 6,
    lineHeight: 18,
  },

  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  linkText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.accent,
    textDecorationLine: "underline",
  },
  bold: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.secondary,
  },
});
