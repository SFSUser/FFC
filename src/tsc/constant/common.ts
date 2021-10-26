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
        url: '/red',
        sections: [
            { url: '/build', name: 'JPIC' },
            { url: '/build', name: 'Derechos humanos' },
            { url: '/red', name: 'Red de Migrantes', ready: true},
            { url: '/build', name: 'Extractivismo' }
        ]
    },
    { 
        id: 'formacion',
        group: 1,
        center: false,
        title: 'Formación', image: 'fco_jesus',
        url: '/escuela',
        sections: [
            { url: '/escuela', name: 'Escuela de pensamiento', ready: true }
        ]
    },
    { 
        id: 'donacion',
        group: 1,
        center: false,
        title: 'Donaciones', image: 'donate',
        url: '/build',
        sections: [
            { url: '/build', name: 'Escuela de pensamiento' }
        ]
    },
    {
        id: 'espiritualidad',
        group: 0,
        center: true,
        title: 'Espiritualidad',
        url: '/build',
        sections: [
            { url: '/build', name: 'Oratorio' },
            { url: '/build', name: 'Memoria' },
            { url: '/build', name: 'Mística' },
            { url: '/build', name: 'Reflexión' },
            { url: '/build', name: 'Eremitorio' },
        ]
    },
    { 
        id: 'oratorio',
        group: 2,
        center: false,
        title: 'Oratorio', image: 'fco_rendon',
        url: '/build',
        sections: [
            { url: '/build', name: 'Vigilias' },
            { url: '/build', name: 'Eucaristía' },
            { url: '/build', name: 'Musica, Oración, Textos' },
        ]
    },
    { 
        id: 'jovenes',
        group: 2,
        center: false,
        title: 'Jóvenes', image: 'jufra',
        url: '/build',
        sections: [
            { url: '/build', name: 'Red de jóvenes' },
            { url: '/test', name: 'test' },
        ]
    },
    { 
        id: 'tienda',
        group: 2,
        center: false,
        title: 'Tienda', image: 'tejido_artesanal',
        url: '/build',
        sections: [
            { url: '/build', name: 'Red de jóvenes' },
            { url: '/test', name: 'test' },
        ]
    }
];