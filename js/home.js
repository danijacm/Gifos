//import {renderZoomGif} from './zooGif.js';


let logo_ppal = document.getElementById('logo_ppal'); 
let title_home = document.getElementById('title_home');
let nav_bar = document.getElementById('nav_bar');
let label_trending = document.getElementById('label_trending');
let parrafo_trend = document.getElementById('parrafo_trend');
let sec_trending = document.getElementById('sec_trending');
let trending_title = document.getElementById('trending_title');
let trending_txt = document.getElementById('trending_txt');
let foot_txt1 = document.getElementById('foot_txt1');
let foot_txt2 = document.getElementById('foot_txt2');
let title_search = document.getElementById('title_search');
/*let rta_search = document.getElementById('rta_search');*/
let m_dark_mode = document.getElementById('m_dark_mode');


/*export function saveTrendGifos(response){
    let rtaCode = response.meta.status;
    let trendGifArray = [];
    //console.log(typeof(rtaCode));
    if(rtaCode === 200){
        for (let i = 0; i < response.pagination.count; i++) {
            trendGifArray.push(response.data[i]);
            //trendGifArray.push(response[i]);
        }
        localStorage.setItem("trendGifArray", JSON.stringify(trendGifArray));
    }
}*/

export function showGifosSection(showSection, title, flagDark){
    console.log('flagDark = ' + flagDark);
    if(showSection){
        document.getElementById('rta_search').style.display = 'block';
        document.getElementById('gray_line').style.display = 'block';
        title_search.textContent = title;
        
        if(flagDark){
            title_search.classList.add('title-search-dark');
        }
        else{
            title_search.classList.remove('title-search-dark');
        }
    }
    else{
        document.getElementById('rta_search').style.display = 'none';
        document.getElementById('gray_line').style.display = 'none';
    }
}

    
export function renderSearchedGifos(response, title, flagDark){
    let box_results = document.getElementById('box_results');
    box_results.innerHTML = "";
    for (let i = 0; i < response.pagination.count; i++) {
        let newElement = document.createElement('img');
        newElement.setAttribute('id', `gifo${i+1}`);
        newElement.setAttribute('src', `${response.data[i].images.original.url}`);
        newElement.setAttribute('alt', `Gif No${i}`);
        newElement.classList.add('result-gif');
        box_results.appendChild(newElement);
    }
    showGifosSection(true, title, flagDark);
    if(flagDark === false){
        logo_lupa.setAttribute('src', './img/close.svg');
    }
    else{
        logo_lupa.setAttribute('src', './img/close-modo-noct.svg');
    }    
}


export function renderTrendingGifos(response){
    let img_gifo;
    let box_trend_gif = document.getElementById('box_trend_gif');
    for (let i = 0; i < response.data.length; i++) {
        let newElement = document.createElement('img');
        newElement.setAttribute('id', `img_gifo${i+1}`);
        newElement.setAttribute('src', `${response.data[i].images.original.url}`);
        newElement.classList.add('img-gifo');
        box_trend_gif.appendChild(newElement);

        img_gifo = document.getElementById(`img_gifo${i+1}`); 
        img_gifo.addEventListener("click", ()=>{
            //console.log("Estoy en la imagen: " + (i+1));
            //window.location.href = "./zoomGif.html";
            //console.log(response.data[i]);
            localStorage.setItem('trendGifo', JSON.stringify(response.data[i]));
            window.location.href = "./zoomGif.html"; 
            //renderZoomGif(i);
        });
    }
}


function drawIconBurguer(flagDark){
    let logo_burguer = document.getElementById('logo_burguer');
    if(!flagDark){
        logo_burguer.setAttribute('src', './img/burger.svg');
    }
    else{
        logo_burguer.setAttribute('src', './img/burger-modo-noct.svg');
    }
}

export function changeIconBurguer(flagDark, changeIcon){
    if(!flagDark){
        if(changeIcon){
            logo_burguer.setAttribute('src', './img/burger.svg');
        }
        else{
            logo_burguer.setAttribute('src', './img/close.svg');
        }    
    }
    else{
        if(changeIcon){
            logo_burguer.setAttribute('src', './img/burger-modo-noct.svg');
        }
        else{
            logo_burguer.setAttribute('src', './img/close-modo-noct.svg');
        }
    }
    if(!changeIcon){
        changeIcon = true;
    } 
    else{
        changeIcon = false;
    }
    return changeIcon;    
}


function drawIconSearch(showGif, flagDark){
    if(showGif){
        if(flagDark){
            logo_lupa.setAttribute('src', './img/close-modo-noct.svg');
        }
        else{
            logo_lupa.setAttribute('src', './img/close.svg');
        }
    }
    else{
        if(flagDark){
            logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
        }
        else{
            logo_lupa.setAttribute('src', './img/icon-search.svg');
        }
    }
}
    
export function changeModeAction(showGif, flagDark){ 
    if(flagDark === false){    
        flagDark = true;
        m_dark_mode.textContent = 'Modo Diurno';
        nav_bar.classList.remove('nav-bar');
        nav_bar.classList.add('nav-bar-dark');
        //logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
        drawIconSearch(showGif, flagDark);
        logo_ppal.setAttribute('src', './img/logo-mobile-modo-noct.svg');
        document.getElementById('foot_txt1').classList.toggle('foot-txt-dark');                       
        document.getElementById('foot_txt2').classList.toggle('foot-txt-dark');
        input_search.style.color = "#FFFFFF" 
             
        document.body.classList.add('dark');
        title_home.classList.add('txtColorWhite');
        input_search.classList.add('buscador_dark');
        title_search.classList.add('title-search-dark');
        label_trending.classList.add('label-trending-dark');
        label_trending.classList.add('txtColorWhite');
        parrafo_trend.classList.add('parrafo-trend-dark');
        sec_trending.classList.add('trending-section-dark');
        trending_title.classList.add('trending-title-dark');
        trending_txt.classList.add('trending-txt-dark');
        foot_txt1.classList.add('foot-txt1-dark');
        foot_txt2.classList.add('foot-txt2-dark');
        document.getElementById('header_container').classList.add('container-header-dark');
        document.getElementById('footer').classList.add('footer-section-dark');
             
    }
    else{   
        flagDark = false;
        m_dark_mode.textContent = 'Modo Nocturno';
        nav_bar.classList.remove('nav-bar-dark');
        nav_bar.classList.add('nav-bar');
        //logo_lupa.setAttribute('src', './img/icon-search.svg');
        drawIconSearch(showGif, flagDark);
        logo_ppal.setAttribute('src', './img/logo-mobile.svg');
        input_search.style.color = "#000000" 

        document.body.classList.remove('dark');
        title_home.classList.remove('txtColorWhite');
        input_search.classList.remove('buscador_dark');
        title_search.classList.remove('title-search-dark');
        label_trending.classList.remove('label-trending-dark');
        label_trending.classList.remove('txtColorWhite');
        parrafo_trend.classList.remove('parrafo-trend-dark');
        sec_trending.classList.remove('trending-section-dark');
        trending_title.classList.remove('trending-title-dark');
        trending_txt.classList.remove('trending-txt-dark');
        foot_txt1.classList.remove('foot-txt1-dark');
        foot_txt2.classList.remove('foot-txt2-dark');
        document.getElementById('header_container').classList.remove('container-header-dark');
        document.getElementById('footer').classList.remove('footer-section-dark');             
    }
    drawIconBurguer(flagDark);
    return flagDark;
}

export function loadInitMode (showGif){
    let flagDark = JSON.parse(localStorage.getItem('flagDark'));
    if(flagDark != null){     
        if(flagDark === true){
         flagDark = false;
        }
        else{
         flagDark = true;
        }
        flagDark = changeModeAction(showGif, flagDark);    
    }
    else{
     flagDark = false;
    }
    drawIconBurguer(flagDark);
    return flagDark;
}
