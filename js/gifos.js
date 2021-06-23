import {getTrendingGif, getGifos} from './promises.js';
import {renderTrendingGifos, changeModeAction, loadInitMode, changeIconBurguer, 
        renderSearchedGifos, showGifosSection} from './home.js';

window.onload = () => {
   let flagDark;    
   let m_dark_mode = document.getElementById('m_dark_mode');
   let logo_lupa = document.getElementById('logo_lupa');
   let input_search = document.getElementById('input_search');
   let nav_bar = document.getElementById('nav_bar');
   let logo_burguer = document.getElementById('logo_burguer');
   let changeIcon = false;
   let showGif = false;

   flagDark = loadInitMode(showGif);
   //console.log('flagDark - line15 = ' + flagDark);

    getTrendingGif().then(
    (response) => {
        console.log(response);
        //saveTrendGifos(response);
        renderTrendingGifos(response);
     })

    m_dark_mode.addEventListener('click', () => {
        flagDark = changeModeAction(showGif, flagDark);
        localStorage.setItem("flagDark", flagDark);
        nav_bar.classList.toggle('show-nav-bar');
        changeIcon = changeIconBurguer(flagDark, changeIcon);
    });

    logo_burguer.addEventListener('click', () => {
        nav_bar.classList.toggle('show-nav-bar');
        changeIcon = changeIconBurguer(flagDark, changeIcon);
    });

    input_search.addEventListener('keypress', (event) => {
        /* console.log(event.code); */
        if(event.key=="Enter"){
            let word = input_search.value;
            //console.log("Busqueda: " + word);
            getGifos(word).then(
                (response) => {
                    //console.log(response);
                    //console.log('flagDark - line44 = ' + flagDark);
                    renderSearchedGifos(response, word, flagDark);
                    showGif = true;
                 })
        }
    })

    input_search.addEventListener('keydown', (event) => {
        let KeyID = event.key;
        if(KeyID === 'Backspace'){
            if(input_search.value.length === 1){
                if(flagDark === false){
                    logo_lupa.setAttribute('src', './img/icon-search.svg');
                }
                else{
                    logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
                } 
            }
        }
    })

    logo_lupa.addEventListener('click', () => {
        //console.log("Input: " + input_search.value);
        if(showGif === false){
            let word = input_search.value;
            if(word != ""){
                getGifos(word).then(
                    (response) => {
                        //console.log(response);
                        renderSearchedGifos(response, word, flagDark);
                        showGif = true;
                     })
            }
        }
        else{
            showGif = false;
            input_search.value = "";
            showGifosSection(false, "");
            if(flagDark === false){
                logo_lupa.setAttribute('src', './img/icon-search.svg');
            }
            else{
                logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
            } 
        }       
    });
}