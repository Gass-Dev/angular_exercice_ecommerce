export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 13 Pro',
    price: 1159,
    description: 'Un système photo nettement plus puissant. Un écran si réactif qu’il renouvelle vos sensations à chaque interaction. La puce de smartphone la plus rapide au monde. Une résistance exceptionnelle. Et un gain d’autonomie spectaculaire.',
  },
  {
    id: 2,
    name: 'Iphone 12',
    price: 689,
    description: 'Une puce surpuissante. La vitesse 5G. Un double appareil photo de pointe. Une face avant Ceramic Shield plus résistante que le verre de n’importe quel smart­phone. Et un superbe écran OLED lumineux. L’iPhone 12 a tout, en deux tailles parfaites.',
  },
  {
    id: 3,
    name: 'Iphone SE',
    price: 489,
    description: 'Notre puissante puce A13 Bionic rencontre l’un des formats d’iPhone les plus populaires. Voici l’iPhone SE. Tout ce que vous attendiez, à notre prix le plus abordable',
  }
];
