'use client';

import { useEffect, useState } from 'react';
import styles from './CharacterCreateModal.module.css';

const initialValues = {
  name: '',
  house: '',
  species: '',
  patronus: '',
  actor: '',
  image: '',
  dateOfBirth: '',
  eyeColour: '',
  hairColour: '',
  alive: true,
};

export default function CharacterCreateModal({ open, isSubmitting, onClose, onSubmit }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    if (open) {
      setForm(initialValues);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      ...form,
      alive: Boolean(form.alive),
      house: form.house.trim(),
      name: form.name.trim(),
      species: form.species.trim(),
      patronus: form.patronus.trim(),
      actor: form.actor.trim(),
      image: form.image.trim(),
      dateOfBirth: form.dateOfBirth.trim(),
      eyeColour: form.eyeColour.trim(),
      hairColour: form.hairColour.trim(),
    };

    onSubmit(payload);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          ×
        </button>

        <h2 className={styles.title}>Adicionar personagem</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGrid}>
            <label className={`${styles.field} ${styles.full}`}>
              <span className={styles.label}>Nome</span>
              <input
                className={styles.input}
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: Harry Potter"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Casa</span>
              <input
                className={styles.input}
                name="house"
                type="text"
                value={form.house}
                onChange={handleChange}
                placeholder="Ex: Gryffindor"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Espécie</span>
              <input
                className={styles.input}
                name="species"
                type="text"
                value={form.species}
                onChange={handleChange}
                placeholder="Ex: Humano"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Patrono</span>
              <input
                className={styles.input}
                name="patronus"
                type="text"
                value={form.patronus}
                onChange={handleChange}
                placeholder="Ex: Fênix"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Ator</span>
              <input
                className={styles.input}
                name="actor"
                type="text"
                value={form.actor}
                onChange={handleChange}
                placeholder="Ex: Daniel Radcliffe"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Data de nascimento</span>
              <input
                className={styles.input}
                name="dateOfBirth"
                type="text"
                value={form.dateOfBirth}
                onChange={handleChange}
                placeholder="Ex: 31-07-1980"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Cor dos olhos</span>
              <input
                className={styles.input}
                name="eyeColour"
                type="text"
                value={form.eyeColour}
                onChange={handleChange}
                placeholder="Ex: Verde"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Cor do cabelo</span>
              <input
                className={styles.input}
                name="hairColour"
                type="text"
                value={form.hairColour}
                onChange={handleChange}
                placeholder="Ex: Castanho"
              />
            </label>

            <label className={`${styles.field} ${styles.full}`}>
              <span className={styles.label}>URL da imagem</span>
              <input
                className={styles.input}
                name="image"
                type="url"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
              />
            </label>

            <label className={`${styles.field} ${styles.checkboxField}`}>
              <span className={styles.label}>Está vivo(a)?</span>
              <input
                className={styles.checkbox}
                name="alive"
                type="checkbox"
                checked={Boolean(form.alive)}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.secondaryButton} onClick={onClose} disabled={isSubmitting}>
              Cancelar
            </button>
            <button type="submit" className={styles.primaryButton} disabled={isSubmitting}>
              {isSubmitting ? 'Salvando...' : 'Salvar personagem'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
