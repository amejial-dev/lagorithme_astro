import type { CardItem } from '@/types/cards';

export const tickerItems = ['LOREM IPSUM', 'DOLOR SIT AMET', 'CONSECTETUR', 'ADIPISCING ELIT'];

export const featureCards3: CardItem[] = [
  {
    badge: { type: 'icon', value: '/assets/icons/layout.svg', bg: 'var(--color-bg)' },
    title: 'Lorem ipsum dolor',
    body: 'Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/analytics.svg', bg: 'var(--color-bg)' },
    title: 'Consectetur elit',
    body: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/pie-chart.svg', bg: 'var(--color-bg)' },
    title: 'Sed do eiusmod',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    bg: 'var(--color-coral)',
    fg: 'var(--color-ink)',
  },
];

export interface SimpleCard {
  title: string;
  body: string;
  rotate: -1 | 0 | 1;
}

export const featureCards4: SimpleCard[] = [
  { title: 'Lorem ipsum', body: 'Dolor sit amet consectetur adipiscing.', rotate: -1 },
  { title: 'Dolor sit amet', body: 'Sed do eiusmod tempor incididunt ut labore.', rotate: 1 },
  { title: 'Consectetur', body: 'Ut enim ad minima veniam quis nostrum.', rotate: -1 },
  { title: 'Adipiscing elit', body: 'Excepteur sint occaecat cupidatat non proident.', rotate: 1 },
];
