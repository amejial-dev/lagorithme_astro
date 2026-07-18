export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  bio: string;
  initial: string;
  bg: string;
  initialColor: string;
}

export const team: TeamMember[] = [
  {
    name: 'Lorem Ipsum',
    role: 'Dolor sit amet',
    tag: 'Fundador',
    bio: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    initial: 'L',
    bg: 'var(--color-ink)',
    initialColor: 'var(--color-coral)',
  },
  {
    name: 'Dolor Amet',
    role: 'Consectetur elit',
    tag: 'Diseño',
    bio: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    initial: 'D',
    bg: 'var(--color-coral)',
    initialColor: 'var(--color-ink)',
  },
  {
    name: 'Sit Consectetur',
    role: 'Adipiscing elit',
    tag: 'Ingeniería',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    initial: 'S',
    bg: 'var(--color-gray)',
    initialColor: 'var(--color-ink)',
  },
];
