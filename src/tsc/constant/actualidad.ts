
export const ACTUALIDAD_CATEGORIAS = {
    todos: {identificador: "todos", nombre: "Todos"},
    noticia: {identificador: "noticia", nombre: "Noticias"},
    articulos: {identificador: "articulos", nombre: "Artículos"},
    documentos_eclesiales: {identificador: "documentos_eclesiales", nombre: "Documentos Eclesiales"},
    experiencias_fraternas: {identificador: "experiencias_fraternas", nombre: "Experiencias Fraternas"},
    analisis_realidad: {identificador: "analisis_realidad", nombre: "Análisis de la Realidad"},
};

export const ACTUALIDAD = [
    {
        id: 1,
        fecha: "2022-04-27",
        category: ACTUALIDAD_CATEGORIAS.articulos.identificador,
        titulo: "TEOLOGÍAS, ECOLOGÍAS Y EXTRACTIVISMOS",
        descripcion: "Es tarde, pero es nuestra hora. Es tarde, pero es todo el tiempo que tenemos a mano para hacer el futuro...",
        url: "https://drive.google.com/file/d/1r-uFDSr3rKtI8u4QqTso-MolYMWzhUq4/view?usp=sharing"
    },
    {
        id: 2,
        fecha: "2022-04-27",
        category: ACTUALIDAD_CATEGORIAS.articulos.identificador,
        titulo: "Hostsposts de la deforestación de la Amazonía",
        descripcion: "Hostsposts de la deforestación de la Amazonía",
        url: "https://drive.google.com/file/d/101cMaEGig5izKEpNzLNAxVZE4i8DW-Ol/view?usp=sharing"
    },
    {
        id: 3,
        fecha: "2022-04-27",
        titulo: "Colombia Informe Comisión Ciudadana Final",
        descripcion: "Colombia Informe Comisión Ciudadana Final",
        category: ACTUALIDAD_CATEGORIAS.articulos.identificador,
        url: "https://drive.google.com/file/d/1yffv2lxRhdDCRL5mWcBsKdKMqOCCF1we/view?usp=sharing"
    },
    {
        id: 4,
        fecha: "2022-04-27",
        titulo: "CONPES 4080 PP Equidad de género para las mujeres",
        descripcion: "CONPES 4080 PP Equidad de género para las mujeres",
        category: ACTUALIDAD_CATEGORIAS.articulos.identificador,
        url: "https://drive.google.com/file/d/1LpA1yqU9eG-DqrcThRqsxpHfCntn43La/view?usp=sharing"
    }
]
