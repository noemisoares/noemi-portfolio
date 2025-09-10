"use client";

import { useState, useEffect } from "react";
import styles from "./forca.module.css";

export function Forca() {
  const palavras = [
    "javascript", "react", "nextjs", "programacao", "forca",
    "desenvolvimento", "tecnologia", "computador", "interface",
    "frontend", "backend", "fullstack", "codigo", "github",
    "algoritmo", "palavra", "projeto", "usuario", "teste",
    "funcao", "variavel", "loop", "condicional", "array",
    "objeto", "componente", "estilo", "design", "layout", "interface"
  ];

  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState(6);
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [letraInput, setLetraInput] = useState("");
  const [status, setStatus] = useState("Jogando");

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
  }

  function handleSubmit(e) {
    e.preventDefault();
    const letra = letraInput.toLowerCase();
    if (!letra || letrasUsadas.includes(letra)) return;

    setLetrasUsadas([...letrasUsadas, letra]);

    if (!palavra.includes(letra)) {
      setTentativas((t) => t - 1);
    }

    setLetraInput("");
  }

  useEffect(() => {
    if (tentativas <= 0) setStatus("Perdeu");
    else if (palavra.split("").every((l) => letrasUsadas.includes(l))) setStatus("Venceu");
  }, [letrasUsadas, tentativas, palavra]);

  function displayPalavra() {
    return palavra.split("").map((l, i) => (
      <span key={i} className={styles.letra}>
        {letrasUsadas.includes(l) || status === "Perdeu" ? l : "_"}
      </span>
    ));
  }

  return (
    <section className={styles.forcaSection}>
      <h2>Jogo da Forca</h2>
      
      <div className={styles.forcaContainer}>
        <div className={styles.forcaDrawing}>
          {[...Array(6 - tentativas)].map((_, i) => (
            <div key={i} className={`${styles.bonecoPart} part${i + 1}`}></div>
          ))}
        </div>

        <div className={styles.palavra}>{displayPalavra()}</div>

        {status === "Jogando" && (
          <form onSubmit={handleSubmit} className={styles.letraForm}>
            <input
              type="text"
              maxLength={1}
              value={letraInput}
              onChange={(e) => setLetraInput(e.target.value)}
              placeholder="Digite uma letra"
              className={styles.letraInput}
            />
            <button type="submit" className={styles.submitBtn}>Enviar</button>
          </form>
        )}

        <div className={styles.letrasUsadas}>
          Letras usadas: {letrasUsadas.join(", ")}
        </div>

        {status !== "Jogando" && (
          <div className={styles.status}>
            {status === "Venceu" ? "Parabéns! Você ganhou!" : `Você perdeu! Palavra: ${palavra}`}
            <button onClick={iniciarJogo} className={styles.restartBtn}>Reiniciar</button>
          </div>
        )}

        <div className={styles.tentativas}>
          Tentativas restantes: {tentativas}
        </div>
      </div>
    </section>
  );
}
