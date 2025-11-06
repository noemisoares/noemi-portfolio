// app/forca/index.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { Forca } from '../../components/Forca';

export default function ForcaPage() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.rules}>
        <Text style={styles.h2}>Tema: <Text style={styles.h2Bold}>Dungeons and Dragons</Text></Text>

        <Text style={styles.paragraph}>
          <Text style={styles.strong}>Saudações, aventureiro(a)! </Text>
          Este é um Jogo da Forca inspirado no universo de <Text style={styles.italics}><Text style={styles.strong}>Dungeons & Dragons</Text></Text>. Prepare-se para testar sua sorte e seus atributos de <Text style={styles.strong}>Inteligência e Sabedoria!</Text>
        </Text>

        <View style={styles.list}>
          <Text style={styles.li}>• Você começa com 6 tentativas para acertar a palavra.</Text>
          <Text style={styles.li}>• Digite uma letra por vez e clique em "Enviar".</Text>
          <Text style={styles.li}>• Letras corretas aparecem nas linhas e são destacadas em <Text style={styles.greenText}>verde</Text>.</Text>
          <Text style={styles.li}>• Letras erradas consomem tentativas e são destacadas em <Text style={styles.redText}>vermelho</Text>.</Text>
          <Text style={styles.li}>• Se acertar todas as letras, você vence!</Text>
          <Text style={styles.li}>• Se acabar as tentativas, o jogo termina.</Text>
          <Text style={styles.li}>• Use o botão "Reiniciar" para começar outra partida.</Text>
        </View>

        <Text style={[styles.paragraph, styles.italics]}>
          Faça um teste de <Text style={styles.strong}>Investigação</Text> para tentar adivinhar a letra correta. Em casos de dúvida, um teste de <Text style={styles.strong}>Percepção ou Intuição</Text> pode ajudar a encontrar padrões.
        </Text>

        <Text style={[styles.paragraph, styles.h2Bold]}>
          Pense bem, pois cada escolha pode selar seu destino nas mãos de Tiamat ou na bênção de Bahamut!
        </Text>
      </View>

      <View style={styles.game}>
        <Forca />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  rules: {
    marginBottom: theme.spacing.md,
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.fonts.bold,
  },
  h2Bold: {
    fontFamily: theme.fonts.bold,
  },
  paragraph: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    fontFamily: theme.fonts.regular,
  },
  strong: {
    fontFamily: theme.fonts.bold,
  },
  italics: {
    fontStyle: 'italic',
  },
  list: {
    marginVertical: theme.spacing.sm,
  },
  li: {
    marginBottom: 8,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  greenText: {
    color: 'rgb(2, 137, 2)',
    fontWeight: '700',
  },
  redText: {
    color: 'rgb(214, 4, 4)',
    fontWeight: '700',
  },
  game: {
    marginTop: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
