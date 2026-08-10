import Link from 'next/link';
import Navbar from '@/components/Header/Header';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.errorCard}>
          <span className={styles.errorCode}>404</span>
          <h1 className={styles.title}>Página Desaparecida! 🪄</h1>
          <p className={styles.description}>
            Parece que esta página usou a Capa da Invisibilidade ou o feitiço de navegação falhou. O Ministério da Magia não encontrou este local.
          </p>
          <Link href="/" className={styles.homeBtn}>
            🏰 Voltar para a Home
          </Link>
        </div>
      </main>
    </div>
  );
}