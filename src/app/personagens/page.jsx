'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header/Header';
import CardPersonagens from '@/components/Personagens/Card/CardPersonagens';
import ModalPersonagens from '@/components/Personagens/Modal/ModalPersonagens';
import CharacterCreateModal from '@/components/Personagens/Modal/CharacterCreateModal';
import styles from './personagens.module.css';

export default function PersonagensPage() {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('wizarddex-favorites');
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        } else {
          localStorage.removeItem('wizarddex-favorites');
        }
      } catch {
        localStorage.removeItem('wizarddex-favorites');
      }
    }

    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('/api/personagens');
        let customCharacters = [];
        try {
          const savedCharacters = JSON.parse(localStorage.getItem('wizarddex-custom-characters') || '[]');
          customCharacters = Array.isArray(savedCharacters) ? savedCharacters : [];
        } catch {
          localStorage.removeItem('wizarddex-custom-characters');
        }
        setCharacters([...customCharacters, ...response.data]);
      } catch {
        setError('Ocorreu um erro ao carregar os personagens. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCreateCharacter = async (payload) => {
    try {
      setIsSubmitting(true);
      const newCharacter = {
        ...payload,
        id: `custom-${Date.now()}`,
      };
      const savedCharacters = JSON.parse(localStorage.getItem('wizarddex-custom-characters') || '[]');
      const updatedCharacters = [newCharacter, ...(Array.isArray(savedCharacters) ? savedCharacters : [])];
      localStorage.setItem('wizarddex-custom-characters', JSON.stringify(updatedCharacters));
      setCharacters((current) => [newCharacter, ...current]);
      setIsCreateModalOpen(false);
      toast.success(`${newCharacter.name || 'Personagem'} foi adicionado com sucesso! ✨`, {
        theme: 'dark',
      });
    } catch {
      toast.error('Não foi possível salvar o personagem neste navegador.', { theme: 'dark' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleFavorite = (character, e) => {
    e.stopPropagation();
    const isFav = favorites.includes(character.id);

    if (isFav) {
      const updatedFavorites = favorites.filter((id) => id !== character.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('wizarddex-favorites', JSON.stringify(updatedFavorites));
      toast.info(`${character.name} foi removido dos favoritos! 💔`, {
        theme: 'dark',
      });
    } else {
      const updatedFavorites = [...favorites, character.id];
      setFavorites(updatedFavorites);
      localStorage.setItem('wizarddex-favorites', JSON.stringify(updatedFavorites));
      toast.success(`${character.name} foi adicionado aos favoritos! ✨`, {
        theme: 'dark',
      });
      router.push(`/favoritos/${character.id}`);
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
          characters.length > 0 ? (
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
          ) : <p className={styles.emptyMessage}>Nenhum personagem encontrado.</p>
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
