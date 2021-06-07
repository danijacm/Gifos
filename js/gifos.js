import {getTrendingGif} from './promises.js';
import {renderTrendingGifos, changeModeAction, loadInitMode, changeIconBurguer} from './home.js';

window.onload = () => {
   let flagDark;    
   let m_dark_mode = document.getElementById('m_dark_mode');
   let logo_lupa = document.getElementById('logo_lupa');
   let input_search = document.getElementById('input_search');
   let nav_bar = document.getElementById('nav_bar');
   let logo_burguer = document.getElementById('logo_burguer');
   let changeIcon = false;

   flagDark = loadInitMode();

    getTrendingGif().then(
    (response) => {
        renderTrendingGifos(response);
     })

    m_dark_mode.addEventListener('click', () => {
        flagDark = changeModeAction(flagDark);
        localStorage.setItem("flagDark", flagDark);
        nav_bar.classList.toggle('show-nav-bar');
        changeIcon = changeIconBurguer(flagDark, changeIcon);
    });

    logo_burguer.addEventListener('click', () => {
        nav_bar.classList.toggle('show-nav-bar');
        changeIcon = changeIconBurguer(flagDark, changeIcon);
    });

    input_search.addEventListener('keypress', (event) => {

        if(flagDark === false){
            logo_lupa.setAttribute('src', './img/close.svg');
        }
        else{
            logo_lupa.setAttribute('src', './img/close-modo-noct.svg');
        }
        /*if(event.key=="Enter"){
            getMovie(title_movie.value).then(
                (response) => {
                    console.log(response);
                    renderInfoMovie(response);
                }
            )
        }*/
    })

    logo_lupa.addEventListener('click', () => {
        if(flagDark === false){
            logo_lupa.setAttribute('src', './img/icon-search.svg');
            input_search.value = "";
        }
        else{
            logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
            input_search.value = "";
        }
    });
}