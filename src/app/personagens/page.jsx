'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header/Header';
import CardPersonagens from '@/components/Personagens/Card/CardPersonagens';
import ModalPersonagens from '@/components/Personagens/Modal/ModalPersonagens';
import CharacterCreateModal from '@/components/Personagens/Modal/CharacterCreateModal';
import styles from './personagens.module.css';

export default function PersonagensPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/personagens');
      setCharacters(response.data);
    } catch (err) {
      setError('Ocorreu um erro ao carregar os personagens. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleCreateCharacter = async (payload) => {
    try {
      setIsSubmitting(true);

      const response = await axios.post('/api/personagens', payload);
      setCharacters((current) => [response.data, ...current]);
      setIsCreateModalOpen(false);
      toast.success(`${response.data.name || 'Personagem'} foi adicionado com sucesso! ✨`, {
        theme: 'dark',
      });
    } catch (err) {
      const message = err.response?.data?.message || 'Não foi possível criar o personagem.';
      toast.error(message, { theme: 'dark' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleFavorite = (character, e) => {
    e.stopPropagation();
    const isFav = favorites.includes(character.id);

    if (isFav) {
      setFavorites(favorites.filter((id) => id !== character.id));
      toast.info(`${character.name} foi removido dos favoritos! 💔`, {
        theme: 'dark',
      });
    } else {
      setFavorites([...favorites, character.id]);
      toast.success(`${character.name} foi adicionado aos favoritos! ✨`, {
        theme: 'dark',
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.container}>
        <ToastContainer position="top-right" autoClose={3000} />

        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Galeria de Personagens</h1>
          <p className={styles.pageSubtitle}>
            Explore e conheça os bruxos e bruxas registrados no Ministério da Magia.
          </p>

          <button
            type="button"
            className={styles.createButton}
            onClick={() => setIsCreateModalOpen(true)}
          >
            + Adicionar personagem
          </button>
        </header>

        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Lumos! Carregando personagens...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <h2>🪄 Feitiço Falhou!</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className={styles.charactersGrid}>
            {characters.map((char) => (
              <CardPersonagens
                key={char.id}
                character={char}
                onSelect={setSelectedCharacter}
                isFavorite={favorites.includes(char.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}

        {selectedCharacter && (
          <ModalPersonagens
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}

        <CharacterCreateModal
          open={isCreateModalOpen}
          isSubmitting={isSubmitting}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateCharacter}
        />
      </main>
    </div>
  );
}
