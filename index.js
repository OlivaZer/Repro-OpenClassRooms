// Cette fonction "previous" est appelée lorsqu'un utilisateur souhaite faire défiler vers la gauche.
function previous() {
    // On récupère la largeur de l'élément avec la classe CSS "div-slider1".
    const widthSlider = document.querySelector('.div-slider1').offsetWidth;

    // On déplace la barre de défilement horizontal de l'élément avec la classe CSS "all-slider"
    // vers la gauche en soustrayant la largeur de "div-slider1".
    document.querySelector('.all-slider').scrollLeft -= widthSlider;
}

// Cette fonction "next" est appelée lorsqu'un utilisateur souhaite faire défiler vers la droite.
function next() {
    // On récupère la largeur de l'élément avec la classe CSS "div-slider1".
    const widthSlider = document.querySelector('.div-slider1').offsetWidth;

    // On déplace la barre de défilement horizontal de l'élément avec la classe CSS "all-slider"
    // vers la droite en ajoutant la largeur de "div-slider1".
    document.querySelector('.all-slider').scrollLeft += widthSlider;
}


function togglePopupBurger(){
    let popup = document.querySelector("nav ul");
    popup.classList.toggle("open");
}



