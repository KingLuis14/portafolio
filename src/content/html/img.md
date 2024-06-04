---
titlePage: "html-img"
descriptionPage: "Un tipo de recurso muy frecuente en nuestras páginas son las imágenes. Las imágenes son importantísimas para conseguir que nuestra página se vea bien y sea agradable (si son imágenes de decoración) o ayude a mostrar y ejemplificar lo que escribimos en ella (si son imágenes de contenido)."
cardTitle : "El elemento <img>"
imagenBlog: "https://e0.pxfuel.com/wallpapers/973/666/desktop-wallpaper-html-5.jpg"
indice: ['El elemento <img>','El atributo src','El atributo alt','Los atributos width y height']

---

# El elemento `<img>`

El elemento `<img>` te permite integrar imágenes en tu página web con facilidad. Admite un gran número de formatos. La gran variedad en atributos hace que el img tag se adapte aún mejor a HTML.


## El atributo `src`

La URL de la imagen. Este atributo es obligatorio para el elemento. En navegadores que soportan srcset, src es tratado como imagen candidata con una densidad del píxel 1x sino una imagen estará definida en srcset o srcset contiene ancho.

La imagen puede estar en varios formatos diferentes, dependiendo del soporte del navegador, como por ejemplo **.jpg, .webp, .png, .gif** u otros.


```html

    <img src="http://ift.pe/img/logo.png"/>
    
```

## El atributo `alt`


Este atributo define el texto alternativo que describe la imagen, texto que los usuarios verán si la URL de la imagen es errónea o la imagen tiene un formato no soportado o si la imagen aún no se ha descargado.

Este atributo es muy importante en aspectos de accesibilidad, ya que en el caso de que estemos leyendo una página web con un lector de voz para invidentes, la imagen no podrá ser leída, por lo que leerá el texto alternativo.

```html

    <img src="http://ift.pe/img/logo.png" alt="Logo de IFT"/>
    
```

## Los atributos `width` y `height`

Aunque estos atributos no son obligatorios como los anteriores, es posible indicar los atributos width y height en el elemento `<img>` con valores numéricos (que se interpretarán como píxels) o porcentajes. De indicar sólo uno de estos atributos, los navegadores actuales adaptarán el otro para respetar la proporción de la imagen.


```html

    <img width="600px" height="600px" src="http://ift.pe/img/logo.png"/>

```



## Recursos

- [Aspect Ratio css](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
- [Imagenes en Html MDN](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Imagenes responsivas](https://web.dev/learn/design/responsive-images?hl=es-419)
- [Lazy loading de imagenes codepen](https://codepen.io/jamesqquick/pen/vYLMwMd)
- [La guia completa sobre lazy loading imagenes Css Tricks](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/?fbclid=IwAR2gm3q1j6eZ9rNYo2YcXVz5dsGSJU0xHfsWCTsGl-NqEdT3xFlEJxfLmhs)
- [Lazy loading de imagenes google dev](https://web.dev/articles/lazy-loading-images?hl=es-419)

