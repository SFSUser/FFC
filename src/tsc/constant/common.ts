export const WEB_TITLE = "Familia Franciscana de Colombia";

export const WEB_TITLE_SMALL = "FFC";

export const WEB_DESCRIPTION = "Página web oficial de la Familia Franciscana de Colombia";

export const COMUNIDADES = [...new Set([
    "OFS",
    "OFM",
    "OFM Conv",
    "OFM Cap",
    "OSC",
    //"OSC Cap",
    //"OSC Urb",
    //"OSC Col",
    "OIC",
    //"OCPA",
    //"CFM",
    //"CFP",
    //"CFSF",
    //"CONFHIC",
    //"FBC",
    //"FBF",
    //"FBMVA",
    //"FCIM",
    //"FCJM",
    //"FCL",
    //"FFSC",
    "FFSTM",
    //"FHM",
    //"FI",
    "FIC",
    //"FIHM",
    //"FMGB",
    //"FMI",
    "FMM",
    "FFMB",
    //"FMMDP",
    "FMNJ",
    //"FMSC",
    //"FSGM",
    //"HFIC",
    "HFSA",
    "HFSF",
    "HFSC",
    "HFES",
    //"HTMF",
    "HTC",
    "ISM",
    "HCSC",
    //"IFNSV",
    //"OFM Alc",
    //"OFM Disco",
    //"OFM Obs",
    //"OFM Rec",
    //"OFM Ref",
    //"OFM Obs",
    "OSF",
    //"RM",
    "RTC",
    //"SA",
    //"SFCC",
    //"SFCR",
    //"SFEB",
    //"SSFCR",
    //"STFE",
    //"STFR",
    //"TFBA",
    //"TOF",
    //"TOS",
    //"UFS",
    "Jufra",
    "HFMMA",
    //"FIC",
    "FMI",
    //"FMM",
    //"TOR",
].sort())];

export const HomeCategory = [
    {
        id: 'inicio',
        group: -1,
        center: false,
        title: 'Inicio',
        url: '/',
        sections: []
    },
    { 
        id: 'jpic',
        group: 1,
        center: false,
        title: 'JPIC', image: 'jpic',
        url: '/migrantes',
        sections: [
            { url: '/build', name: 'Madre Tierra, Hermana Agua' },
            { url: '/migrantes', name: 'Red Franciscana para Migrantes', ready: true},
            { url: '/build', name: 'Red de Parejas Franciscanas' },
            { url: '/build', name: 'Red de Jóvenes Franciscanos' },
            { url: '/build', name: 'Nuevos Estilos de Vida - Eremitorios' }
        ]
    },
    { 
        id: 'formacion',
        group: 1,
        center: false,
        title: 'Formación', image: 'fco_jesus',
        url: '/escuela',
        sections: [
            { url: '/escuela', name: 'Escuela de Pensamiento y Formación Francisclariana ', shortname: "Escuela de Pensamiento", ready: true },
            { url: '/tertulia', name: 'Tertulias'},
            { url: '/build', name: 'Otros servicios'},
        ]
    },
    { 
        id: 'oratorio',
        group: 1,
        center: false,
        title: 'Oratorio', image: 'fco_rendon',
        url: '/build',
        sections: [
            { url: '/build', name: 'Oración' },
            { url: '/build', name: 'Vigilias' },
            { url: '/build', name: 'Eucaristías' },
            { url: '/build', name: 'Celebraciones Franciscanas' },
            { url: '/build', name: 'Santo del Día' },
            { url: '/build', name: 'Ordo' },
            { url: '/build', name: 'Reflexión del Evangelio' },
        ]
    },
    { 
        id: 'actualidad',
        group: 2,
        center: false,
        title: 'Actualidad', image: 'fondo_novedades',
        url: '/actualidad',
        sections: [
            { url: '/actualidad', name: 'Noticias' },
            /*{ url: '/build', name: 'Artículos' },
            { url: '/build', name: 'Documentos Eclesiales' },
            { url: '/build', name: 'Experiencias Fraternas' },
            { url: '/build', name: 'Análisis de la Realidad' },*/
        ]
    },
    { 
        id: 'donacion',
        group: 2,
        center: false,
        title: 'Secretaría', image: 'donate',
        url: '/build',
        sections: [
            { url: '/build', name: 'Información de Contacto' },
            { url: '/build', name: 'Medio de Comunicación' },
            { url: '/build', name: 'Directoria de las Congregaciones' },
            { url: '/build', name: 'JUFRA' },
            { url: '/build', name: 'Casas de Retiros' },
            { url: '/build', name: 'Actividades del año' },
        ]
    },
    { 
        id: 'tienda',
        group: 2,
        center: false,
        title: 'Tienda', image: 'tejido_artesanal',
        url: '/build',
        sections: [
            { url: '/build', name: 'Venta de Libros' },
            { url: '/build', name: 'Venta de Accesorios Religiosos' },
            { url: '/build', name: 'Venta de Artesanías' },
        ]
    },
    /*{ 
        id: 'donacion',
        group: 2,
        center: false,
        title: 'OFICINA DE SECRETARÍA DE FAMILIA FRANCISCANA DE COLOMBIA- FFC', image: 'donate',
        url: '/build',
        sections: [
            { url: '/build', name: 'Proyectos que se apoyan' },
            { url: '/build', name: 'Botón de donación' },
        ]
    }*/
];