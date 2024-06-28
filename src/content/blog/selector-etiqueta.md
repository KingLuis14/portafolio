---
titlePage: "selector etiqueta"
descriptionPage: "Como su mismo nombre indica, un selector CSS es una referencia a uno o varios elementos HTML, escrito generalmente desde código CSS (también pueden utilizarse desde ciertos lugares en Javascript). Es una forma rápida y cómoda de hacer referencia a elementos individuales o grupos de elementos, para posteriormente darles estilo."
cardTitle : "Selectores Css"
imagenBlog: "https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png"
tags: ['css']
pubDate: 'Julio 08 2024'
---

# Selectores `Css`

Como su mismo nombre indica, un selector CSS es una referencia a uno o varios elementos HTML, escrito generalmente desde código CSS **(también pueden utilizarse desde ciertos lugares en Javascript).** Es una forma rápida y cómoda de hacer referencia a elementos individuales o grupos de elementos, para posteriormente darles estilo.

## Selector de `Etiqueta`

El selector de etiqueta en CSS, también conocido como selector de tipo, es una herramienta fundamental en la hoja de estilos en cascada. Este selector permite aplicar estilos a todos los elementos HTML de un tipo específico.

El selector de etiqueta es esencial para establecer estilos básicos y consistentes a través de un documento HTML. A diferencia de otros selectores más específicos, como los selectores de clase o ID, el selector de etiqueta aplica las reglas de estilo a todos los elementos del mismo tipo, lo cual es útil para asegurar una uniformidad básica en el diseño de los documentos web.

**No obstante, debido a su naturaleza global, debe usarse con cuidado para evitar conflictos de estilo** y para mantener la capacidad de los elementos individuales de sobrescribir estilos cuando sea necesario mediante selectores más específicos.

## Selector de `Clase`

El selector de clase en CSS se utiliza para aplicar estilos a uno o varios elementos HTML que comparten una misma clase. Se define precediendo el nombre de la clase con un punto `(.)` y se coloca el nombre de la clase en los elementos HTML correspondientes usando el `atributo class`.

Este selector permite una mayor flexibilidad y especificidad en el diseño, ya que puede aplicarse a cualquier combinación de elementos en el documento. A diferencia del selector de etiqueta, que afecta a todos los elementos de un tipo, **el selector de clase puede reutilizarse en múltiples lugares sin afectar otros elementos no relacionados**, lo que facilita la creación de estilos modulares y reutilizables en el código CSS.

## Selector de `ID`

Todas las etiquetas HTML pueden tener un atributo id con un valor concreto. Este valor será el nombre que le daremos a la etiqueta. Un buen símil con la vida real es la de un DNI o tarjeta de identificación, **ya que la particularidad clave de los ID es que no se deben repetir, es decir, que sólo debe haber una etiqueta con el mismo ID por documento.**

## Selector `Agrupado`

Los selectores agrupados en CSS **permiten aplicar el mismo conjunto de estilos a múltiples elementos a la vez, lo que reduce la repetición de código y mejora la legibilidad**. Para agrupar selectores, se listan los selectores deseados separados por comas y se definen los estilos en un único bloque de declaración.

## Selector `Combinado`

Los selectores combinados en CSS **permiten aplicar estilos a elementos que satisfacen múltiples criterios simultáneamente**, ofreciendo mayor precisión y control sobre el diseño. Esto es útil para situaciones donde se necesita que un elemento cumpla con varias condiciones para recibir ciertos estilos, lo que permite una personalización y especificidad más refinada en la hoja de estilos.

Usar selectores combinados facilita la gestión de estilos complejos sin afectar otros elementos que no cumplen con todos los criterios especificados. 

## Selector `Descendiente`

El selector descendiente en CSS **permite aplicar estilos a los elementos que son descendientes de un elemento específico dentro de la jerarquía del HTML.** Se define separando los selectores por un espacio, lo que indica que el segundo elemento debe estar en algún nivel de anidación dentro del primero.

Este selector proporciona una mayor especificidad y control, ya que los estilos solo afectarán a los elementos que se encuentran dentro de una estructura particular, facilitando así la organización y coherencia del diseño en diferentes secciones de una página web.

**No obstante, puede generar problemas sino se controla adecuadamente**

## Selector de `Atributo`

Los selectores de atributos en CSS **permiten aplicar estilos a elementos HTML en función de la presencia o el valor de uno o más atributos específicos.** Estos selectores ofrecen una gran flexibilidad y precisión al diseñar, ya que se pueden dirigir elementos basados en cualquier atributo HTML y sus valores.

Los selectores de atributos se encierran en corchetes y pueden apuntar a atributos con valores específicos, atributos que contienen una palabra, atributos que comienzan con un valor, y otras variaciones. Esta capacidad es especialmente útil para estilos contextuales donde los atributos dinámicos juegan un papel importante, como en formularios y componentes interactivos.

### Atributos de Datos

Los atributos son atributos **personalizados que se pueden agregar a elementos HTML para almacenar datos personalizados**. El prefijo `data-*` va seguido de cualquier nombre que desee darle al atributo.

### ¿Por qué utilizar `data-*`?

Los atributos **permiten a los desarrolladores agregar datos personalizados a elementos a los que se puede acceder y manipular mediante JavaScript o CSS**. Proporcionan una forma de almacenar datos que no son visibles para los usuarios, pero que los desarrolladores pueden utilizar para realizar acciones específicas o aplicar estilos según el valor del atributo.

Algunos casos de uso comunes para `data-*` incluyen:

* Almacenar datos para que JavaScript pueda acceder a ellos más adelante.
* Proporcionar metadatos sobre un elemento necesario para determinada funcionalidad (por ejemplo, una fecha para un widget de calendario).
* Seleccionar elementos para marcos de prueba automatizados como Jest o React Testing Library.
Aplicar diferentes temas o estilos a un elemento en función de su data-*valor de atributo.

