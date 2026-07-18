export interface BlogPost {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  imgBg: string;
}

const backgrounds = [
  'var(--color-ink)',
  'var(--color-coral)',
  'var(--color-gray)',
  'var(--color-navy)',
  'var(--color-ink)',
  'var(--color-coral)',
];

export const posts: BlogPost[] = [
  {
    tag: 'Producto',
    date: '02 Jul 2026',
    title: 'Lorem ipsum dolor sit amet consectetur',
    excerpt: 'Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.',
    imgBg: backgrounds[0],
  },
  {
    tag: 'Diseño',
    date: '28 Jun 2026',
    title: 'Sed do eiusmod tempor incididunt ut labore',
    excerpt: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
    imgBg: backgrounds[1],
  },
  {
    tag: 'Compañía',
    date: '19 Jun 2026',
    title: 'Ut enim ad minima veniam quis nostrum',
    excerpt: 'Exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.',
    imgBg: backgrounds[2],
  },
  {
    tag: 'Producto',
    date: '10 Jun 2026',
    title: 'Quis autem vel eum iure reprehenderit',
    excerpt: 'Qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    imgBg: backgrounds[3],
  },
  {
    tag: 'Guías',
    date: '02 Jun 2026',
    title: 'Neque porro quisquam est qui dolorem',
    excerpt: 'Ipsum quia dolor sit amet consectetur adipiscing velit sed quia.',
    imgBg: backgrounds[4],
  },
  {
    tag: 'Diseño',
    date: '24 May 2026',
    title: 'At vero eos et accusamus et iusto odio',
    excerpt: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
    imgBg: backgrounds[5],
  },
];
