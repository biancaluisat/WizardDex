'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header/Header';
import styles from './feiticos.module.css';

export default function FeiticosPage() {
  const [spells, setSpells] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/api/feiticos')
      .then((response) => setSpells(Array.isArray(response.data) ? response.data : []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const visibleSpells = spells.filter((spell) =>
    `${spell.name} ${spell.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.container}>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>ACERVO DO MINISTÉRIO</p>
          <h1 className={styles.pageTitle}>Livro de feitiços</h1>
          <p className={styles.pageSubtitle}>Encantamentos e efeitos catalogados.</p>
        </header>

        <label className={styles.searchField}>
          <span>Buscar feitiço</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nome ou efeito"
          />
        </label>

        {loading && <p className={styles.message}>Consultando o livro...</p>}
        {error && <p className={styles.message}>Não foi possível carregar os feitiços.</p>}
        {!loading && !error && visibleSpells.length === 0 && (
          <p className={styles.message}>Nenhum feitiço encontrado.</p>
        )}
        {!loading && !error && visibleSpells.length > 0 && (
          <ul className={styles.spellList}>
            {visibleSpells.map((spell) => (
              <li key={spell.id}>
                <h2>{spell.name}</h2>
                <p>{spell.description || 'Sem descrição disponível.'}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}