import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <main className={estilos.principal}>

      <Header />

      <section className={estilos.banner}>

        <Image
          src="/images/hogwartss.png"
          alt="Universo mágico"
          fill
          priority
          className={estilos.imagemBanner}
        />

        <div className={estilos.sobreposicaoBanner}></div>

        <div className={estilos.conteudoBanner}>

          <div className={estilos.topoBanner}>
            <span></span>

            <p>MINISTÉRIO DA MAGIA</p>

            <span></span>
          </div>

          <Image
            src="/images/logo.png"
            alt="WizardDex"
            width={290}
            height={290}
            className={estilos.logoBanner}
          />

          <div className={estilos.textoBanner}>

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
            className={estilos.botaoBanner}
          >
            Explorar personagens

            <span>→</span>
          </Link>

        </div>

        <div className={estilos.decoracaoBanner}>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>

      </section>


      <section className={estilos.secaoAtalhos}>

        <div className={estilos.introducaoSecao}>

          <span>
            WIZARDDEX
          </span>

          <h2>
            Explore a nossa enciclopédia
          </h2>

        </div>

        <div className={estilos.gradeAtalhos}>

          <Link
            href="/personagens"
            className={estilos.cartaoAtalho}
          >

            <div className={estilos.numeroCartao}>
              01
            </div>

            <div className={estilos.conteudoCartao}>

              <span className={estilos.iconeCartao}>
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

            <span className={estilos.setaCartao}>
              ↗
            </span>

          </Link>


          <Link
            href="/sobre"
            className={`${estilos.cartaoAtalho} ${estilos.cartaoRoxo}`}
          >

            <div className={estilos.numeroCartao}>
              02
            </div>

            <div className={estilos.conteudoCartao}>

              <span className={estilos.iconeCartao}>
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

            <span className={estilos.setaCartao}>
              ↗
            </span>

          </Link>

        </div>

      </section>


      <section className={estilos.projeto}>

        <div className={estilos.etiquetaProjeto}>
          SOBRE A WIZARDDEX
        </div>

        <div className={estilos.conteudoProjeto}>

          <h2>
            Uma biblioteca
            <br />
            <span>do mundo mágico.</span>
          </h2>

          <div className={estilos.textoProjeto}>

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

        <div className={estilos.linhaProjeto}></div>

      </section>


      <section className={estilos.secaoTecnologias}>

        <div className={estilos.cabecalhoTecnologias}>

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

        <div className={estilos.listaTecnologias}>

          <div className={estilos.itemTecnologia}>
            <span>01</span>

            <strong>
              Next.js
            </strong>

            <small>
              Framework
            </small>
          </div>

          <div className={estilos.itemTecnologia}>
            <span>02</span>

            <strong>
              React
            </strong>

            <small>
              Biblioteca
            </small>
          </div>

          <div className={estilos.itemTecnologia}>
            <span>03</span>

            <strong>
              Axios
            </strong>

            <small>
              Requisições
            </small>
          </div>

          <div className={estilos.itemTecnologia}>
            <span>04</span>

            <strong>
              CSS Modules
            </strong>

            <small>
              Estilização
            </small>
          </div>

          <div className={estilos.itemTecnologia}>
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


      <section className={estilos.missao}>

        <div className={estilos.caixaMissao}>

          <div className={estilos.lateralMissao}>

            <span>
              NOSSA MISSÃO
            </span>

            <div className={estilos.simboloMissao}>
              ✧
            </div>

            <small>
              WIZARDDEX
            </small>

          </div>

          <div className={estilos.conteudoMissao}>

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
              className={estilos.botaoMissao}
            >
              Conhecer personagens
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}