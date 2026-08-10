'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../Header/Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const headerItems = [
    { name: 'Home', path: '/' },
    { name: 'Personagens', path: '/personagens' },
    { name: 'Sobre', path: '/sobre' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo.png"
            alt="Logo WizardDex"
            width={48}
            height={48}
            priority
            className={styles.logoImage}
          />
          <span className={styles.logoTitle}>WIZARDDEX</span>
        </Link>

        <nav>
          <ul className={styles.headerList}>
            {headerItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`${styles.headerLink} ${
                      isActive ? styles.activeLink : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}