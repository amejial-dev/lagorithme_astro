import type { CardItem } from '@/types/cards';

export const values: CardItem[] = [
  {
    badge: { type: 'number', value: '01', bg: 'var(--color-coral)' },
    title: 'Lorem ipsum',
    body: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'number', value: '02', bg: 'var(--color-coral)' },
    title: 'Dolor sit amet',
    body: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    bg: 'var(--color-gray)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'number', value: '03', bg: 'var(--color-coral)' },
    title: 'Consectetur',
    body: 'Ut labore et dolore magna aliqua ut enim ad minim veniam.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'number', value: '04', bg: 'var(--color-coral)' },
    title: 'Adipiscing elit',
    body: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    bg: 'var(--color-gray)',
    fg: 'var(--color-ink)',
  },
];

export const corpValues: CardItem[] = [
  {
    badge: { type: 'icon', value: '/assets/icons/check.svg', bg: 'var(--color-coral)' },
    title: 'Lorem ipsum',
    body: 'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/bookmark.svg', bg: 'var(--color-coral)' },
    title: 'Dolor sit amet',
    body: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    bg: 'var(--color-coral)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/analytics.svg', bg: 'var(--color-coral)' },
    title: 'Consectetur',
    body: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/pie-chart.svg', bg: 'var(--color-coral)' },
    title: 'Adipiscing elit',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    bg: 'var(--color-coral)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/layout.svg', bg: 'var(--color-coral)' },
    title: 'Tempor magna',
    body: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
];
