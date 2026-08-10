import styles from './sobre.module.css';
import Header from '@/components/Header/Header';

export default function Sobre() {
    return (
        <main className={styles.page}>
            <Header />

            <section className={styles.hero}>
                <div className={styles.heroDecoration}>✦</div>

                <p className={styles.eyebrow}>A ENCICLOPÉDIA MÁGICA</p>

                <h1>
                    Sobre a <span>WizardDex</span>
                </h1>

                <div className={styles.divider}>
                    <span></span>✦<span></span>
                </div>

                <p className={styles.intro}>
                    Um espaço criado para explorar os personagens do universo de Harry Potter de uma
                    forma simples, bonita e interativa.
                </p>
            </section>

            <section className={styles.content}>
                <div className={styles.infoGrid}>
                    <article className={styles.infoCard}>
                        <div className={styles.icon}>🏰</div>
                        <div>
                            <span className={styles.label}>CURSO</span>
                            <h2>Desenvolvimento de Sistemas</h2>
                            <p>
                                Projeto desenvolvido como parte das atividades práticas do curso,
                                utilizando tecnologias modernas para criação de aplicações web.
                            </p>
                        </div>
                    </article>

                    <article className={styles.infoCard}>
                        <div className={styles.icon}>📚</div>
                        <div>
                            <span className={styles.label}>TURMA</span>
                            <h2>2TDS1 -Desenvolvimento de Sistemas</h2>
                            <p>
                                Trabalho desenvolvido em equipe, colocando em prática conceitos de
                                desenvolvimento front-end e componentização.
                            </p>
                        </div>
                    </article>
                </div>

                <section className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <span>✦</span>
                        <div>
                            <p>QUEM NOS GUIA</p>
                            <h2>Professores</h2>
                        </div>
                    </div>

                    <div className={styles.teacherGrid}>
                        <div className={styles.teacherCard}>
                            <span>✧</span>
                            <h3>Nome do Professor</h3>
                            <p>Thiago Ferreira</p>
                        </div>

                        <div className={styles.teacherCard}>
                            <span>✧</span>
                            <h3>Nome do Professor</h3>
                            <p>Marcelo Carboni</p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <span>✦</span>
                        <div>
                            <p>A EQUIPE POR TRÁS DA MAGIA</p>
                            <h2>Integrantes</h2>
                        </div>
                    </div>

                    <div className={styles.members}>
                        <div className={styles.member}>
                            <span className={styles.memberNumber}>01</span>
                            <div>
                                <h3>Beatriz Miotto de Oliveira</h3>
                                <p>Desenvolvedora</p>
                            </div>
                        </div>

                        <div className={styles.member}>
                            <span className={styles.memberNumber}>02</span>
                            <div>
                                <h3>Bianca Luisa Teodoro Silva</h3>
                                <p>Desenvolvedora</p>
                            </div>
                        </div>

                        <div className={styles.member}>
                            <span className={styles.memberNumber}>03</span>
                            <div>
                                <h3>Livia Oliveira Cruz</h3>
                                <p>Desenvolvedora</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.quote}>
                    <div className={styles.quoteSymbol}>“</div>

                    <p>
                        Mais do que uma aplicação, a WizardDex é uma forma de unir criatividade,
                        tecnologia e magia em um único projeto.
                    </p>

                    <span>— Equipe WizardDex</span>
                </section>
            </section>
        </main>
    );
}
