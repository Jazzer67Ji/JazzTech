export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Casque Audio Premium",
    price: 299.99,
    description: "Casque audio sans fil avec réduction de bruit active. Son haute définition, autonomie 30h, confort optimal pour une expérience d'écoute immersive.",
    image: "https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzJTIwYmxhY2t8ZW58MXx8fHwxNzcwODI1OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Audio",
    stock: 15
  },
  {
    id: "2",
    name: "Montre Deluxe",
    price: 449.99,
    description: "Montre Deluxe avec boîtier en acier inoxydable, mouvement automatique suisse et résistance à l'eau jusqu'à 100mbracelet en métal.",
    image: "https://images.unsplash.com/photo-1636639818651-d97365346a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMHNpbHZlcnxlbnwxfHx8fDE3NzA3OTg1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Accessoires",
    stock: 8
  },
  {
    id: "3",
    name: "Clavier MultiDevice",
    price: 159.99,
    description: "Clavier MultiDevice sans fil avec autonomie 3 mois, design compact.",
    image: "https://images.unsplash.com/photo-1686730491204-819a6dda6c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGtleWJvYXJkJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzA4NzcwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Informatique",
    stock: 12
  },
  {
    id: "4",
    name: "Smartphone Pro X",
    price: 999.99,
    description: "Smartphone dernière génération avec écran 6.7' OLED 120Hz, triple caméra 108MP, processeur ultra-rapide et charge rapide 65W.",
    image: "https://images.unsplash.com/photo-1761906976176-0559a6d130dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9kZXJuJTIwYmxhY2t8ZW58MXx8fHwxNzcwODc3MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Téléphones",
    stock: 5
  },
  {
    id: "5",
    name: "Laptop UltraBook",
    price: 1299.99,
    description: "Ordinateur portable ultra-fin 14' avec processeur Intel i7, 16Go RAM, SSD 512Go, écran 4K tactile et autonomie 12h.",
    image: "https://images.unsplash.com/photo-1637329589604-4485001b3605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHNpbHZlcnxlbnwxfHx8fDE3NzA4NTg5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Informatique",
    stock: 7
  },
  {
    id: "6",
    name: "Appareil Photo Reflex",
    price: 1899.99,
    description: "Appareil photo professionnel 45MP, vidéo 4K 60fps, stabilisation 5 axes, double slot carte et écran tactile orientable.",
    image: "https://images.unsplash.com/photo-1696273338595-178a113ead5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwcm9mZXNzaW9uYWwlMjBibGFja3xlbnwxfHx8fDE3NzA4NDM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Photo",
    stock: 3
  }
];
