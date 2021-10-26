import { Grid } from "react-feather";

export const HERMANOS = [
    {
        imagen: 'https://imgur.com/g8F6Hpp.jpg',
        nombre: 'Ernesto Pérez',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/3yBmzsM.jpg',
        nombre: 'María de Jesús Lepesqueur',
        cargo: '',
        grupos: 'red|escuela'
    },
    {
        imagen: 'https://imgur.com/EvaBFGQ.jpg',
        nombre: 'Nydia Díaz',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/o7Zk1BP.jpg',
        nombre: 'Marta Rendón',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/iJO0YjX.jpg',
        nombre: 'Diomirna Rojas',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/OF3FW1D.jpg',
        nombre: 'Fray Juan Jairo Rendón, OFM',
        cargo: '',
        grupos: 'red|escuela'
    },
    {
        imagen: 'https://imgur.com/YrICGhi.jpg',
        nombre: 'María Margarita Sánchez',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/5LPr9kb.jpg',
        nombre: 'Fabián Valderrama',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: 'https://imgur.com/Sy6bqFn.jpg',
        nombre: 'Johanna Pérez',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: '',
        nombre: 'Miguel Ángel Martín',
        cargo: '',
        grupos: 'red'
    },
    {
        imagen: '',
        nombre: 'César Augusto Baratto Abello',
        cargo: '',
        grupos: 'escuela'
    },
    {
        imagen: '',
        nombre: 'Norma Liliana Sarmiento Romero',
        cargo: '',
        grupos: 'escuela'
    },
    {
        imagen: '',
        nombre: '',
        cargo: '',
        grupos: ''
    },
];

export const GET_GROUP = (group: string) => {
    return HERMANOS.filter( h => h.grupos.includes(group)).map( h => {
        h.imagen = h.imagen ? h.imagen : "https://imgur.com/6x2q4AX.png";
        return h;
    });
};