'use client';
import { useEffect, useState } from 'react';

/**
 * Хук для відстеження медіа-запитів
 * @param query - CSS медіа-запит (наприклад, '(max-width: 950px)')
 * @returns boolean - чи відповідає поточний розмір екрану запиту
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Перевірка на сервері (SSR)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    
    // Встановлюємо початкове значення
    setMatches(mediaQuery.matches);

    // Створюємо обробник змін
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Додаємо слухач (для сучасних браузерів)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      // Fallback для старих браузерів
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
}

