export interface CardBadge {
  type: 'icon' | 'number';
  value: string;
  bg?: string;
}

export interface CardItem {
  badge: CardBadge;
  title: string;
  body: string;
  bg?: string;
  fg?: string;
}
