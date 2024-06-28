export const carruselProduct = () => {
    if (!(navigator.maxTouchPoints > 1)) {
    
        const $BtnPrevProductSlider = document.querySelectorAll(
            ".carrusel-blogs__btnPrev",
        );
        const $BtnNextProductSlider = document.querySelectorAll(
            ".carrusel-blogs__btnNext",
        );
    
        $BtnPrevProductSlider.forEach((boton) => {
            boton.classList.add("show");
        });
        $BtnNextProductSlider.forEach((boton) => {
            boton.classList.add("show");
        });
    
        document.addEventListener("click", ({ target }: MouseEvent) => {
            const $Element = target as HTMLElement;
    
            if ($Element.classList.contains("carrusel-blogs__btnPrev")) {
                const $ScrollProduct = $Element.nextElementSibling;
                const $ArticleProduct = $ScrollProduct.firstElementChild as HTMLElement;
                $ScrollProduct.scrollLeft -= $ArticleProduct.offsetWidth;
            }
            if ($Element.classList.contains("carrusel-blogs__btnNext")) {
                const $ScrollProduct = $Element.previousElementSibling;
                const $ArticleProduct = $ScrollProduct.firstElementChild as HTMLElement;
                $ScrollProduct.scrollLeft += $ArticleProduct.offsetWidth;
            }
        });
    }
}

