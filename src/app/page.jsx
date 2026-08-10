import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className={styles.navbar}>
        <div className={styles.navContainer}>

          <Link href="/" className={styles.brand}>
            <Image
              src="/images/logo.png"
              alt="Logo WizardDex"
              width={50}
              height={50}
            />

            <div>
              <strong>WIZARDDEX</strong>
              <small>ENCICLOPÉDIA DOS BRUXOS</small>
            </div>
          </Link>

          <nav>
            <Link href="/" className={styles.active}>
              Início
            </Link>

            <Link href="/personagens">
              Personagens
            </Link>

            <Link href="/sobre">
              Sobre
            </Link>
          </nav>

        </div>
      </header>


      {/* =========================
          BANNER
      ========================= */}

      <section className={styles.banner}>

        <Image
          src="/images/banner.jpg"
          alt="Universo mágico"
          fill
          priority
          className={styles.bannerImage}
        />

        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>

          <div className={styles.bannerTop}>
            <span></span>

            <p>MINISTÉRIO DA MAGIA</p>

            <span></span>
          </div>


          <Image
            src="/images/logo.png"
            alt="WizardDex"
            width={290}
            height={290}
            className={styles.bannerLogo}
          />


          <div className={styles.bannerText}>

            <h1>
              A enciclopédia digital dos bruxos
            </h1>

            <p>
              Descubra personagens, casas, patronos e
              curiosidades do universo mágico.
            </p>

          </div>


          <Link
            href="/personagens"
            className={styles.bannerButton}
          >
            Explorar personagens

            <span>→</span>
          </Link>

        </div>


        <div className={styles.bannerDecoration}>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>

      </section>


      {/* =========================
          CARDS PRINCIPAIS
      ========================= */}

      <section className={styles.quickSection}>

        <div className={styles.sectionIntro}>

          <span>
            WIZARDDEX
          </span>

          <h2>
            Explore a nossa enciclopédia
          </h2>

        </div>


        <div className={styles.quickGrid}>

          {/* =========================
              PERSONAGENS
          ========================= */}

          <Link
            href="/personagens"
            className={styles.quickCard}
          >

            <div className={styles.cardNumber}>
              01
            </div>

            <div className={styles.cardContent}>

              <span className={styles.cardIcon}>
                ♙
              </span>

              <h3>
                Personagens
              </h3>

              <p>
                Conheça os personagens do universo mágico
                e descubra informações como casa,
                patrono, espécie, ator e muito mais.
              </p>

            </div>

            <span className={styles.arrow}>
              ↗
            </span>

          </Link>


          {/* =========================
              SOBRE
          ========================= */}

          <Link
            href="/sobre"
            className={`${styles.quickCard} ${styles.purpleCard}`}
          >

            <div className={styles.cardNumber}>
              02
            </div>

            <div className={styles.cardContent}>

              <span className={styles.cardIcon}>
                ✦
              </span>

              <h3>
                Sobre
              </h3>

              <p>
                Conheça o projeto, nossa turma, o curso,
                os professores e os integrantes responsáveis
                pelo desenvolvimento da WizardDex.
              </p>

            </div>

            <span className={styles.arrow}>
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* =========================
          SOBRE O PROJETO
      ========================= */}

      <section className={styles.project}>

        <div className={styles.projectTag}>
          SOBRE A WIZARDDEX
        </div>


        <div className={styles.projectContent}>

          <h2>
            Uma biblioteca
            <br />

            <span>do mundo mágico.</span>
          </h2>


          <div className={styles.projectText}>

            <p>
              A WizardDex é uma enciclopédia digital criada
              para reunir informações sobre os personagens
              do universo de Harry Potter.
            </p>

            <p>
              A aplicação utiliza uma API pública para
              apresentar diferentes informações sobre cada
              personagem de forma simples e organizada.
            </p>

            <p>
              Nossa proposta é facilitar a exploração desse
              universo e tornar a experiência mais interativa.
            </p>

          </div>

        </div>


        <div className={styles.projectLine}></div>

      </section>


      {/* =========================
          TECNOLOGIAS
      ========================= */}

      <section className={styles.techSection}>

        <div className={styles.techHeader}>

          <div>

            <span>
              DESENVOLVIMENTO
            </span>

            <h2>
              Tecnologias
            </h2>

          </div>

          <p>
            Ferramentas utilizadas no desenvolvimento
            da WizardDex.
          </p>

        </div>


        <div className={styles.techList}>

          <div className={styles.techItem}>
            <span>01</span>

            <strong>
              Next.js
            </strong>

            <small>
              Framework
            </small>
          </div>


          <div className={styles.techItem}>
            <span>02</span>

            <strong>
              React
            </strong>

            <small>
              Biblioteca
            </small>
          </div>


          <div className={styles.techItem}>
            <span>03</span>

            <strong>
              Axios
            </strong>

            <small>
              Requisições
            </small>
          </div>


          <div className={styles.techItem}>
            <span>04</span>

            <strong>
              CSS Modules
            </strong>

            <small>
              Estilização
            </small>
          </div>


          <div className={styles.techItem}>
            <span>05</span>

            <strong>
              React Toastify
            </strong>

            <small>
              Notificações
            </small>
          </div>

        </div>

      </section>


      {/* =========================
          OBJETIVO
      ========================= */}

      <section className={styles.mission}>

        <div className={styles.missionBox}>

          <div className={styles.missionSide}>

            <span>
              NOSSA MISSÃO
            </span>

            <div className={styles.missionSymbol}>
              ✧
            </div>

            <small>
              WIZARDDEX
            </small>

          </div>


          <div className={styles.missionContent}>

            <h2>
              Conhecimento também
              <span> é magia.</span>
            </h2>


            <p>
              O objetivo da WizardDex é criar uma experiência
              interativa para explorar os personagens do
              universo mágico de forma rápida, organizada
              e divertida.
            </p>


            <Link
              href="/personagens"
              className={styles.missionButton}
            >
              Conhecer personagens
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}