import tradicional from "./assets/tradicional.svg";
import americano from "./assets/americano.svg";
import cremoso from "./assets/cremoso.svg";
import gelado from "./assets/gelado.svg";
import cafeComLeite from "./assets/cafe-com-leite.svg";
import latte from "./assets/latte.svg";
import capuccino from "./assets/capuccino.svg";
import macchiato from "./assets/macchiato.svg";
import mocaccino from "./assets/mocaccino.svg";
import chocolateQuente from "./assets/chocolate-quente.svg";
import cubano from "./assets/cubano.svg";
import havaiano from "./assets/havaiano.svg";
import arabe from "./assets/arabe.svg";
import irlandes from "./assets/irlandes.svg";

export const coffees = [
  {
    id: 1,
    image: tradicional,
    tags: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    image: americano,
    tags: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    image: cremoso,
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    image: gelado,
    tags: ["Tradicional", "geladado"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 5,
    image: cafeComLeite,
    tags: ["Tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    tags: ["Tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    tags: ["Tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    tags: ["Tradicional", "com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    image: mocaccino,
    tags: ["Tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ["Tradicional", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    image: cubano,
    tags: ["Tradicional", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    image: havaiano,
    tags: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 13,
    image: arabe,
    tags: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    image: irlandes,
    tags: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];
