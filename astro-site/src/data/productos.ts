import type { CardItem } from '@/types/cards';

export const services: CardItem[] = [
  {
    badge: { type: 'icon', value: '/assets/icons/layout.svg', bg: 'var(--color-coral)' },
    title: 'Lorem ipsum dolor',
    body: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/analytics.svg', bg: 'var(--color-coral)' },
    title: 'Consectetur elit',
    body: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/pie-chart.svg', bg: 'var(--color-gray)' },
    title: 'Sed do eiusmod',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/folder.svg', bg: 'var(--color-bg)' },
    title: 'Tempor incididunt',
    body: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.',
    bg: 'var(--color-coral)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/credit-card.svg', bg: 'var(--color-gray)' },
    title: 'Ut labore magna',
    body: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'icon', value: '/assets/icons/check.svg', bg: 'var(--color-coral)' },
    title: 'Quis nostrud',
    body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
];

export const steps: CardItem[] = [
  {
    badge: { type: 'number', value: '01', bg: 'var(--color-coral)' },
    title: 'Lorem ipsum dolor',
    body: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
  },
  {
    badge: { type: 'number', value: '02', bg: 'var(--color-coral)' },
    title: 'Ut enim ad minim',
    body: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    bg: 'var(--color-ink)',
    fg: 'var(--color-bg)',
  },
  {
    badge: { type: 'number', value: '03', bg: 'var(--color-coral)' },
    title: 'Duis aute irure',
    body: 'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    bg: 'var(--color-gray)',
    fg: 'var(--color-ink)',
  },
];

export interface BentoItem {
  size: 'large' | 'wide' | 'small';
  bg: string;
  fg: string;
  icon: string;
  title: string;
  body?: string;
}

export const bentoItems: BentoItem[] = [
  {
    size: 'large',
    bg: 'var(--color-gray)',
    fg: 'var(--color-bg)',
    icon: '/assets/icons/layout.svg',
    title: 'Lorem ipsum dolor sit amet',
    body: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    size: 'wide',
    bg: 'var(--color-coral)',
    fg: 'var(--color-ink)',
    icon: '/assets/icons/check.svg',
    title: 'Consectetur elit',
    body: 'Ut enim ad minim veniam quis nostrud exercitation.',
  },
  {
    size: 'small',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
    icon: '/assets/icons/check.svg',
    title: 'Sed do eiusmod',
  },
  {
    size: 'small',
    bg: 'var(--color-bg)',
    fg: 'var(--color-ink)',
    icon: '/assets/icons/hashtag.svg',
    title: 'Duis aute irure',
  },
];
