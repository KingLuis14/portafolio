---
titlePage: "html-img"
descriptionPage: "Los elementos <h1>...<h6> elementos HTML representan seis niveles de encabezados de sección. es el nivel de sección más alto y es el más bajo. De forma predeterminada, todos los elementos de encabezado crean un cuadro a nivel de bloque en el diseño, comenzando en una nueva línea y ocupando todo el ancho disponible en el bloque que los contiene"
cardTitle : "Los elementos de encabezado"
imagenBlog: "https://e0.pxfuel.com/wallpapers/973/666/desktop-wallpaper-html-5.jpg"
tags: ['html']
postReference: ['nav', 'p']
pubDate: 'Mayo 09 2024'
---

# Los Elementos de Encabezados

Los `<h1>` elementos HTML representan seis niveles de encabezados de sección. es el nivel de sección más alto y es el más bajo. De forma predeterminada, todos los elementos de encabezado crean un cuadro a nivel de bloque en el diseño, comenzando en una nueva línea y ocupando todo el ancho disponible en el bloque que los contiene. `<h6>` `<h1><h6>`

## El elemento `<h1>`

El elemento `<h1>` es el titular con más importancia del documento. Esta cabecera es casi equivalente al título del documento, salvo que esté agrupada por un elemento semántico, en cuyo caso sería el título de ese elemento semántico.

```html 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi pagina</title>
    </head>
    <body>
        <h1>Titulo Principal</h1>
    </body>
    </html>

```



## Los elementos `<h2>` ... `<h6>`

Los elementos `<h2>`, `<h3>`, `<h4>`, `<h5>` y `<h6>` son titulares de importancia menor a `<h1>` que van reduciendo su importancia a medida que avanza el número o nivel. Pueden repetirse, es decir, una página puede tener múltiples elementos `<h2>`

```html 

    <body class="page">
        <h1>Título del documento</h1>
        <p class="subtitle">Subtítulo del documento</p>

        <p>Introducción del documento</p>

        <h2>Subtitulo del Primer tema</h2>
        <p>...</p>

        <h3>Ejemplos</h3>
        <p>...</p>

        <section>
            <h2>Subtitulo de la sección</h2>
            <p>...</p>
        </section>
    </body>

```


## Recursos


- [Encabezados Html](https://seranking.com/es/blog/encabezados-html/)

