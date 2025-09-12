"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./forca.module.css";

export function Forca() {
  const palavras = [
    "guerreiro",
    "mago",
    "arqueiro",
    "ladino",
    "clerigo",
    "paladino",
    "druida",
    "feiticeiro",
    "barbaro",
    "monge",
    "bardo",
    "golem",
    "lobisomem",
    "troll",
    "orc",
    "elfo",
    "anao",
    "gigante",
    "vampiro",
    "zumbi",
    "espada",
    "escudo",
    "arco",
    "besta",
    "machado",
    "cajado",
    "adaga",
    "pocao",
    "elixir",
    "amuleta",
    "anel",
    "armadura",
    "capacete",
    "luvas",
    "botas",
    "cape",
    "grimoire",
    "runas",
    "feitico",
    "incantacao",
    "missao",
    "aventura",
    "tesouro",
    "dragao",
    "castelo",
    "floresta",
    "masmorra",
    "inimigo",
    "aliado",
    "guilda",
    "reino",
    "bestiario",
    "portal",
    "orcamento",
    "mana",
    "ritual",
  ];

    const imagens = [
      "/images/Guerreiro_1.png",
      "/images/Branco_2.png",
      "/images/Preto_3.png",
      "/images/Azul_4.png",
      "/images/Verde_5.png",
      "/images/Vermelho_6.png",
      "/images/Derrota_7.png",
      "/images/Vitoria_8.png",
    ];

  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState(6);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [letraInput, setLetraInput] = useState("");
  const [status, setStatus] = useState("Jogando");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra);
    setTentativas(6);
    setLetrasUsadas([]);
    setLetraInput("");
    setStatus("Jogando");
    setAviso("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const letra = letraInput.toLowerCase();

    if (!letra.match(/^[a-z]$/)) {
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
  }

  useEffect(() => {
    if (!palavra) return;
    if (tentativas <= 0) setStatus("Perdeu");
    else if (palavra.split("").every((l) => letrasUsadas.includes(l)))
      setStatus("Venceu");
  }, [letrasUsadas, tentativas, palavra]);

  function displayPalavra() {
    return palavra.split("").map((l, i) => (
      <span key={i} className={styles.letra}>
        {letrasUsadas.includes(l) || status === "Perdeu" ? l : "_"}
      </span>
    ));
  }

    function getImagem() {
      if (status === "Venceu") return imagens[7];
      if (status === "Perdeu") return imagens[6];
      const index = 6 - tentativas;
      return imagens[index];
    }

  return (
    <section className={styles.forcaSection}>
      <h2>Jogo da Forca</h2>

      <div className={styles.forcaContainer}>
        <div className={styles.forcaImages}>
          <Image
            src={getImagem()}
            alt="Imagem do jogo"
            width={400}
            height={400}
            className={styles.imagem}
          />
        </div>

        <div className={styles.palavra}>{displayPalavra()}</div>

        {status === "Jogando" && (
          <form onSubmit={handleSubmit} className={styles.letraForm}>
            <input
              type="text"
              maxLength={1}
              value={letraInput}
              onChange={(e) => {
                setLetraInput(e.target.value);
                setAviso("");
              }}
              placeholder="Digite uma letra"
              className={styles.letraInput}
            />
            <button type="submit" className={styles.submitBtn}>
              Enviar
            </button>
          </form>
        )}

        {aviso && <p className={styles.aviso}>{aviso}</p>}

        <div className={styles.letrasUsadas}>
          <div>
            <strong>Letras corretas:</strong>{" "}
            {letrasUsadas
              .filter((l) => palavra.includes(l))
              .map((l, i) => (
                <span key={i} className={styles.correta}>
                  {l}
                </span>
              ))}
          </div>
          <div>
            <strong>Letras erradas:</strong>{" "}
            {letrasUsadas
              .filter((l) => !palavra.includes(l))
              .map((l, i) => (
                <span key={i} className={styles.errada}>
                  {l}
                </span>
              ))}
          </div>
        </div>

        {status !== "Jogando" && (
          <div className={styles.status}>
            {status === "Venceu"
              ? "Parabéns! Você ganhou!"
              : `Você perdeu! Palavra: ${palavra}`}
            <button onClick={iniciarJogo} className={styles.restartBtn}>
              Reiniciar
            </button>
          </div>
        )}

        <div className={styles.tentativas}>
          Tentativas restantes: {tentativas}
        </div>
      </div>
    </section>
  );
}
