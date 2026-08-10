'use client';

import Image from 'next/image';
import styles from '../Card/CardPersonagem.module.css';

const getHouseBadgeClass = (house) => {
  switch (house?.toLowerCase()) {
    case 'gryffindor': return styles.badgeGryffindor;
    case 'slytherin': return styles.badgeSlytherin;
    case 'ravenclaw': return styles.badgeRavenclaw;
    case 'hufflepuff': return styles.badgeHufflepuff;
    default: return styles.badgeDefault;
  }
};

export default function CharacterCard({ character, onSelect, isFavorite, onToggleFavorite }) {
  const fallbackImage = 'https://via.placeholder.com/240x280/1e293b/f59e0b?text=Sem+Foto';

  return (
    <div className={styles.card} onClick={() => onSelect(character)}>
      <button
        className={styles.favoriteBtn}
        onClick={(e) => onToggleFavorite(character, e)}
        title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <div className={styles.cardImageWrapper}>
        <Image
          src={character.image || fallbackImage}
          alt={character.name}
          fill
          unoptimized
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{character.name}</h3>
        
        <span className={`${styles.cardBadge} ${getHouseBadgeClass(character.house)}`}>
          {character.house || 'Sem Casa'}
        </span>

        <p className={styles.cardActor}>
          <strong>Ator/Atriz:</strong> {character.actor || 'Não informado'}
        </p>
      </div>
    </div>
  );
}