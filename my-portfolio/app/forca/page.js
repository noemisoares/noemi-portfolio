import { Forca } from "@/components/Forca";
import styles from "./page.module.css";

export default function ForcaPage() {
  return (
    <main className={styles.page}>
      <aside className={styles.rules}>
        <h2>
          <strong>Tema: Dungeons and Dragons</strong>
        </h2>
        <p><strong>Bem-vindo(a) ao jogo da forca com palavras do universo de D&D!</strong></p>
        <ul>
          <li>Você começa com 6 tentativas para acertar a palavra.</li>
          <li>Digite uma letra por vez e clique em <i>"Enviar"</i>.</li>
          <li>
            Letras corretas aparecem nas linhas e são destacadas em{" "}
            <span className={styles.greenText}>verde</span>.
          </li>
          <li>
            Letras erradas consomem tentativas e são destacadas em{" "}
            <span className={styles.redText}>vermelho</span>.
          </li>
          <li>Se acertar todas as letras, você vence!</li>
          <li>Se acabar as tentativas, o jogo termina.</li>
          <li>Use o botão <i>"Reiniciar"</i> para começar outra partida.</li>
        </ul>
      </aside>

      <section className={styles.game}>
        <Forca />
      </section>
    </main>
  );
}
