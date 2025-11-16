import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

export default function Forca() {
  const palavras = [
    "guerreiro", "mago", "artifice", "ladino", "clerigo", "paladino",
    "druida", "feiticeiro", "barbaro", "monge", "bardo", "bruxo",
    "ranger", "patrulheiro", "orc", "elfo", "anao", "gigante",
    "halfling", "humano", "dragonborn", "tiefling", "gnomo", "duende",
    "machado", "cajado", "adaga", "arco", "espada", "escudo",
    "anel", "armadura", "carisma", "luvas", "botas", "mimico",
    "grimorio", "runas", "feitico", "campanha", "missao",
    "aventura", "tesouro", "dragao", "castelo", "floresta",
    "masmorra", "tiamat", "bahamut", "guilda", "beholder",
    "bestiario", "lich", "owlbear", "tarrasque", "ritual",
  ];

  const imagens = [
    require("../assets/images/Guerreiro_1.png"),
    require("../assets/images/Branco_2.png"),
    require("../assets/images/Preto_3.png"),
    require("../assets/images/Azul_4.png"),
    require("../assets/images/Verde_5.png"),
    require("../assets/images/Vermelho_6.png"),
    require("../assets/images/Derrota_7.png"),
    require("../assets/images/Vitoria_8.png"),
  ];

  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState(6);
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [letraInput, setLetraInput] = useState("");
  const [status, setStatus] = useState("Jogando");
  const [aviso, setAviso] = useState("");

  const iniciarJogo = () => {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra);
    setTentativas(6);
    setLetrasUsadas([]);
    setLetraInput("");
    setStatus("Jogando");
    setAviso("");
  };

  useEffect(() => {
    iniciarJogo();
  }, []);

  const enviarLetra = () => {
    const letra = letraInput.toLowerCase();

    if (!letra.match(/^[a-zá-ú]$/)) {
      setAviso("Digite apenas letras.");
      setLetraInput("");
      return;
    }

    if (letrasUsadas.includes(letra)) {
      setAviso(`A letra "${letra}" já foi usada!`);
      setLetraInput("");
      return;
    }

    setAviso("");
    setLetrasUsadas([...letrasUsadas, letra]);

    if (!palavra.includes(letra)) {
      setTentativas((t) => t - 1);
    }

    setLetraInput("");
  };

  useEffect(() => {
    if (!palavra) return;
    if (tentativas <= 0) setStatus("Perdeu");
    else if (palavra.split("").every((l) => letrasUsadas.includes(l))) setStatus("Venceu");
  }, [letrasUsadas, tentativas, palavra]);

  const displayPalavra = () =>
    palavra.split("").map((l, i) => (
      <Text key={i} style={styles.letra}>
        {letrasUsadas.includes(l) || status === "Perdeu" ? l : "_"}
      </Text>
    ));

  const getImagem = () => {
    if (status === "Venceu") return imagens[7];
    if (status === "Perdeu") return imagens[6];
    const index = 6 - tentativas;
    return imagens[index];
  };

  return (
    <View style={styles.forcaSection}>
      <View style={styles.forcaContainer}>
        <Image source={getImagem()} style={styles.imagem} resizeMode="contain" />

        <View style={styles.palavra}>{displayPalavra()}</View>

        {status === "Jogando" && (
          <View style={styles.letraForm}>
            <TextInput
              style={styles.letraInput}
              maxLength={1}
              value={letraInput}
              onChangeText={(t) => {
                setLetraInput(t);
                setAviso("");
              }}
              placeholder="Digite uma letra"
              placeholderTextColor={theme.colors.text + "88"}
            />
            <TouchableOpacity style={styles.btn} onPress={enviarLetra}>
              <Text style={styles.btnText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}

        {aviso ? <Text style={styles.aviso}>{aviso}</Text> : null}

        <View style={styles.letrasUsadas}>
          <Text style={styles.usadasTitle}>
            Letras corretas:{" "}
            {letrasUsadas
              .filter((l) => palavra.includes(l))
              .map((l, i) => (
                <Text key={i} style={styles.correta}>
                  {l}
                </Text>
              ))}
          </Text>

          <Text style={styles.usadasTitle}>
            Letras erradas:{" "}
            {letrasUsadas
              .filter((l) => !palavra.includes(l))
              .map((l, i) => (
                <Text key={i} style={styles.errada}>
                  {l}
                </Text>
              ))}
          </Text>
        </View>

        {status !== "Jogando" && (
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>
              {status === "Venceu"
                ? "Parabéns! Você ganhou!"
                : `Você perdeu! Palavra: ${palavra}`}
            </Text>
            <TouchableOpacity style={[styles.btn, styles.restartBtn]} onPress={iniciarJogo}>
              <Text style={styles.btnText}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.tentativas}>Tentativas restantes: {tentativas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forcaSection: {
    padding: 16,
    marginTop: -35,
    borderRadius: 20,
    alignItems: "center",
  },
  forcaContainer: {
    alignItems: "center",
    gap: 10,
  },
  imagem: {
    width: 400,
    height: 400,
    marginTop: -70,
    marginBottom: -50,
  },
  palavra: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 16,
  },
  letra: {
    fontSize: 32,
    marginHorizontal: 4,
    color: theme.colors.text,
  },
  letraForm: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  letraInput: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 8,
    padding: 8,
    fontSize: 12,
    textAlign: "center",
    width: 110,
    color: theme.colors.text,
  },
  btn: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  aviso: {
    color: "#e53e3e",
    marginTop: 6,
    fontWeight: "bold",
  },
  letrasUsadas: {
    marginTop: 10,
    alignItems: "center",
  },
  usadasTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  correta: {
    color: "#12a949",
    fontWeight: "bold",
  },
  errada: {
    color: "#cb0e0e",
    fontWeight: "bold",
  },
  statusBox: {
    marginTop: 12,
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  restartBtn: {
    backgroundColor: theme.colors.primary,
  },
  tentativas: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
