export interface Imagenes {
    placeholder: string;
    original: string;
}

export interface Proyecto {
    imagenes: Imagenes;
    titulo: string;
    url: string;
    tags: string[];
}

const Proyectos: Proyecto[] = [
    {
        imagenes: {
            placeholder: "",
            original: "img/iisep-web-site.avif"
        },
        titulo: "Instituto IISEP",
        url: "https://iisepsedecomas.netlify.app/",
        tags: [
            "Html",
            "Css",
            "JavaScript",
            "Sass",
            "Astro",
            "React"
        ]
    },
    {
        imagenes: {
            placeholder: "",
            original: "img/juego-21.avif"
        },
        titulo: "Juego de 21",
        url: "https://juegode21.netlify.app/",
        tags: [
            "Html",
            "Css",
            "JavaScript"
        ]
    },
    {
        imagenes: {
            placeholder: "",
            original: "img/gif-expert-app.avif"
        },
        titulo: "Buscador de Gifs",
        url: "https://gifapp-enrique.netlify.app/",
        tags: [
            "Html",
            "Css",
            "JavaScript",
            "React"
        ]
    },
    {
        imagenes: {
            placeholder: "",
            original: "img/iisep-web-site.avif"
        },
        titulo: "Instituto IFT",
        url: "https://iisepsedecomas.netlify.app/",
        tags: [
            "Html",
            "Css",
            "JavaScript",
            "Sass",
            "Astro"
        ]
    }
];

export default Proyectos