import { Forca } from "@/components/Forca";
import styles from "./page.module.css";

export default function ForcaPage() {
  return (
    <main className={styles.page}>
      <aside className={styles.rules}>
        <h2>
          <strong>Tema: Dungeons and Dragons</strong>
        </h2>
        <p>
          <strong>Saudações, aventureiro(a)!</strong> Este é um Jogo da Forca
          inspirado no universo de{" "}
          <i>
            <strong>Dungeons & Dragons</strong>
          </i>
          . Prepare-se para testar sua sorte e seus atributos de{" "}
          <strong>Inteligência e Sabedoria!</strong>{" "}
        </p>
        <ul>
          <li>Você começa com 6 tentativas para acertar a palavra.</li>
          <li>
            Digite uma letra por vez e clique em <i>&quot;Enviar&quot;</i>.
          </li>
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
          <li>
            Use o botão <i>&quot;Reiniciar&quot;</i> para começar outra partida.
          </li>
        </ul>
        <p>
          <i>
            Faça um teste de <strong>Investigação</strong> para tentar adivinhar
            a letra correta. Em casos de dúvida, um teste de{" "}
            <strong>Percepção ou Intuição</strong> pode ajudar a encontrar
            padrões.
          </i>
        </p>
        <br />
        <p>
          <strong>
            Pense bem, pois cada escolha pode selar seu destino nas mãos de
            Tiamat ou na bênção de Bahamut!
          </strong>
        </p>
      </aside>
      <section className={styles.game}>
        <Forca />
      </section>
    </main>
  );
}
