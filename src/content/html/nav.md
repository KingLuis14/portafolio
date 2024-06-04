---
titlePage: "El elemento `<nav>`"
descriptionPage: "Un tipo de recurso muy frecuente en nuestras páginas son las imágenes. Las imágenes son importantísimas para conseguir que nuestra página se vea bien y sea agradable (si son imágenes de decoración) o ayude a mostrar y ejemplificar lo que escribimos en ella (si son imágenes de contenido)."
cardTitle : "El elemento <nav>"
imagenBlog: "https://e0.pxfuel.com/wallpapers/973/666/desktop-wallpaper-html-5.jpg"
indice: ['El elemento <nav>','Múltiples elementos <nav>']
---

# El elemento `<nav>`

El elemento `<nav>` nos permite crear una sección que agrupe los enlaces de navegación por la página, es decir, una especie de `<div>` contenedor orientado a desplazarse por los diferentes lugares del sitio web.

### Ejemplo

```html

    <nav>
        <ul>
            <li>Nosotros</li>
            <li>Cursos</li>
            <li>Servicios</li>
            <li>Contacto</li>
        </ul>
    </nav>
    
```

## Múltiples elementos `<nav>`

Es posible tener varios elementos `<nav>` en nuestro sitio, ya que por ejemplo, quizás necesitemos una segunda o tercera agrupación de enlaces de navegación porque visualmente están separados de los demás bloques. En ese caso, se pueden utilizar nuevos elementos `<nav>` para agrupar enlaces de navegación.

```html

    <div>
        <nav>
            <ul>
                <li>Ofimatica</li>
                <li>Diseño Web</li>
                <li>Programacion</li>
                <li>Diseño Gráfico</li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li>Lima</li>
                <li>Arequipa</li>
                <li>Puno</li>
                <li>Ica</li>
            </ul>
        </nav>
    </div>
    
```


## Recursos


- [Elemento nav MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/nav)

