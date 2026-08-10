'use client';

import Image from 'next/image';
import styles from '../Modal/ModalPersonagens.module.css';

export default function CharacterModal({ character, onClose }) {
  if (!character) return null;

  const fallbackImage = 'https://via.placeholder.com/240x280/1e293b/f59e0b?text=Sem+Foto';

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          ✖
        </button>

        <h2 className={styles.modalTitle}>{character.name}</h2>

        <div className={styles.modalBody}>
          <div className={styles.modalImageWrapper}>
            <Image
              src={character.image || fallbackImage}
              alt={character.name}
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.modalDetails}>
            <p className={styles.detailItem}>
              <strong>Casa:</strong> {character.house || 'Não informada'}
            </p>
            <p className={styles.detailItem}>
              <strong>Espécie:</strong> {character.species || 'Desconhecida'}
            </p>
            <p className={styles.detailItem}>
              <strong>Patrono:</strong> {character.patronus || 'Nenhum / Desconhecido'}
            </p>
            <p className={styles.detailItem}>
              <strong>Data de Nascimento:</strong> {character.dateOfBirth || 'Desconhecida'}
            </p>
            <p className={styles.detailItem}>
              <strong>Cor dos Olhos:</strong> {character.eyeColour || 'Desconhecida'}
            </p>
            <p className={styles.detailItem}>
              <strong>Cor do Cabelo:</strong> {character.hairColour || 'Desconhecida'}
            </p>
            <p className={styles.detailItem}>
              <strong>Ator/Atriz:</strong> {character.actor || 'Desconhecido'}
            </p>
            <p className={styles.detailItem}>
              <strong>Situação:</strong> {character.alive ? '🟢 Vivo(a)' : '💀 Falecido(a)'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}