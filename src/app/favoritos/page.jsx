'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Header from '@/components/Header/Header';
import CardPersonagens from '@/components/Personagens/Card/CardPersonagens';
import styles from './favoritos.module.css';

export default function FavoritosPage() {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('wizarddex-favorites');
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoriteIds(parsedFavorites);
        } else {
          localStorage.removeItem('wizarddex-favorites');
        }
      } catch {
        localStorage.removeItem('wizarddex-favorites');
      }
    }

    let customCharacters = [];
    try {
      const parsedCharacters = JSON.parse(localStorage.getItem('wizarddex-custom-characters') || '[]');
      customCharacters = Array.isArray(parsedCharacters) ? parsedCharacters : [];
    } catch {
      localStorage.removeItem('wizarddex-custom-characters');
    }

    axios.get('/api/personagens')
      .then((response) => setCharacters([...customCharacters, ...response.data]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const removeFavorite = (character, event) => {
    event.stopPropagation();
    const updatedFavorites = favoriteIds.filter((id) => String(id) !== String(character.id));
    setFavoriteIds(updatedFavorites);
    localStorage.setItem('wizarddex-favorites', JSON.stringify(updatedFavorites));
  };

  const favoriteCharacters = characters.filter((character) =>
    favoriteIds.some((id) => String(id) === String(character.id)),
  );

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.container}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>SUA COLEÇÃO</p>
          <h1 className={styles.pageTitle}>Personagens favoritos</h1>
          <p className={styles.pageSubtitle}>Seus nomes guardados no acervo mágico.</p>
        </header>

        {loading && <p className={styles.message}>Carregando favoritos...</p>}
        {error && <p className={styles.message}>Não foi possível carregar os personagens.</p>}
        {!loading && !error && favoriteCharacters.length === 0 && (
          <section className={styles.emptyState}>
            <span aria-hidden="true">♡</span>
            <h2>Nenhum favorito por enquanto</h2>
            <p>Adicione personagens à sua coleção pela galeria.</p>
            <button type="button" onClick={() => router.push('/personagens')}>
              Explorar personagens
            </button>
          </section>
        )}
        {!loading && !error && favoriteCharacters.length > 0 && (
          <div className={styles.charactersGrid}>
            {favoriteCharacters.map((character) => (
              <CardPersonagens
                key={character.id}
                character={character}
                isFavorite
                onSelect={() => router.push(`/favoritos/${character.id}`)}
                onToggleFavorite={removeFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}