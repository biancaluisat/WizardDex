'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Header from '@/components/Header/Header';
import styles from './detalhe.module.css';

export default function FavoritoDetalhePage() {
  const { id } = useParams();
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let favoriteIds = [];
    try {
      const parsedFavorites = JSON.parse(localStorage.getItem('wizarddex-favorites') || '[]');
      favoriteIds = Array.isArray(parsedFavorites) ? parsedFavorites : [];
    } catch {
      localStorage.removeItem('wizarddex-favorites');
    }

    setIsFavorite(favoriteIds.some((favoriteId) => String(favoriteId) === String(id)));
    try {
      const customCharacters = JSON.parse(localStorage.getItem('wizarddex-custom-characters') || '[]');
      const localCharacter = Array.isArray(customCharacters)
        ? customCharacters.find((item) => String(item.id) === String(id))
        : null;
      if (localCharacter) {
        setCharacter(localCharacter);
        setLoading(false);
        return;
      }
    } catch {
      localStorage.removeItem('wizarddex-custom-characters');
    }

    axios.get(`/api/personagens/${encodeURIComponent(id)}`)
      .then((response) => setCharacter(response.data))
      .catch(() => setCharacter(null))
      .finally(() => setLoading(false));
  }, [id]);

  const removeFavorite = () => {
    const favoriteIds = JSON.parse(localStorage.getItem('wizarddex-favorites') || '[]');
    const updatedFavorites = favoriteIds.filter((favoriteId) => String(favoriteId) !== String(id));
    localStorage.setItem('wizarddex-favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(false);
    router.push('/favoritos');
  };

  if (loading) {
    return <main className={styles.status}>Carregando personagem...</main>;
  }

  if (!character || !isFavorite) {
    return (
      <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.status}>
          <h1>Favorito não encontrado</h1>
          <p>Este personagem não está na sua coleção.</p>
          <Link href="/favoritos">Voltar aos favoritos</Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.container}>
        <Link href="/favoritos" className={styles.backLink}>← Voltar aos favoritos</Link>
        <article className={styles.profile}>
          <div className={styles.imageWrapper}>
            <Image
              src={character.image || '/images/logo.png'}
              alt={character.name}
              fill
              unoptimized
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.eyebrow}>PERSONAGEM FAVORITO</p>
            <h1>{character.name}</h1>
            <p className={styles.house}>{character.house || 'Sem casa'}</p>
            <dl className={styles.details}>
              <div><dt>Ator/Atriz</dt><dd>{character.actor || 'Não informado'}</dd></div>
              <div><dt>Espécie</dt><dd>{character.species || 'Não informada'}</dd></div>
              <div><dt>Patrono</dt><dd>{character.patronus || 'Não informado'}</dd></div>
              <div><dt>Data de nascimento</dt><dd>{character.dateOfBirth || 'Não informada'}</dd></div>
            </dl>
            <button type="button" onClick={removeFavorite}>Remover dos favoritos</button>
          </div>
        </article>
      </main>
    </div>
  );
}