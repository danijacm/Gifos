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


    export function renderTrendingGifos(response){
        let box_trend_gif = document.getElementById('box_trend_gif');
        for (let i = 0; i < response.data.length; i++) {
            let newElement = document.createElement('img');
            newElement.setAttribute('id', `img_gifo${i+1}`);
            newElement.setAttribute('src', `${response.data[i].images.original.url}`);
            newElement.classList.add('img-gifo');
            box_trend_gif.appendChild(newElement);
        }
    }

    function changeLabelBurguer(dark){
        if(dark){
             document.getElementById('linea1').style.backgroundColor = 'white';
             document.getElementById('linea2').style.backgroundColor = 'white';
             document.getElementById('linea3').style.backgroundColor = 'white';
        }
        else{
             document.getElementById('linea1').style.backgroundColor = '#572EE5';
             document.getElementById('linea2').style.backgroundColor = '#572EE5';
             document.getElementById('linea3').style.backgroundColor = '#572EE5';
        }
    }
    
    export function changeModeAction(flagDark){
         /*document.body.classList.toggle('dark');
         title_home.classList.toggle('txtColorWhite');
         input_search.classList.toggle('buscador_dark');
         label_trending.classList.toggle('label-trending-dark');
         label_trending.classList.toggle('txtColorWhite');
         parrafo_trend.classList.toggle('parrafo-trend-dark');
         sec_trending.classList.toggle('trending-section-dark');
         trending_title.classList.toggle('trending-title-dark');
         trending_txt.classList.toggle('trending-txt-dark');
         foot_txt1.classList.toggle('foot-txt1-dark');
         foot_txt2.classList.toggle('foot-txt2-dark');
         document.getElementById('header_container').classList.toggle('container-header-dark');
         document.getElementById('footer').classList.toggle('footer-section-dark');*/
 
         
         if(flagDark === false){    
             flagDark = true;
             changeLabelBurguer(flagDark);
             m_dark_mode.textContent = 'Modo Diurno';
             nav_bar.classList.remove('nav-bar');
             nav_bar.classList.add('nav-bar-dark');
             logo_lupa.setAttribute('src', './img/icon-search-modo-noct.svg');
             logo_ppal.setAttribute('src', './img/logo-mobile-modo-noct.svg');
             document.getElementById('foot_txt1').classList.toggle('foot-txt-dark');                       
             document.getElementById('foot_txt2').classList.toggle('foot-txt-dark');
             input_search.style.color = "#FFFFFF" 
             
             document.body.classList.add('dark');
             title_home.classList.add('txtColorWhite');
             input_search.classList.add('buscador_dark');
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
             changeLabelBurguer(flagDark);
             m_dark_mode.textContent = 'Modo Nocturno';
             nav_bar.classList.remove('nav-bar-dark');
             nav_bar.classList.add('nav-bar');
             logo_lupa.setAttribute('src', './img/icon-search.svg');
             logo_ppal.setAttribute('src', './img/logo-mobile.svg');
             input_search.style.color = "#000000" 

             document.body.classList.remove('dark');
             title_home.classList.remove('txtColorWhite');
             input_search.classList.remove('buscador_dark');
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
         return flagDark;
    }

export function loadInitMode (){
    let flagDark = JSON.parse(localStorage.getItem('flagDark'));
    if(flagDark != null){     
        if(flagDark === true){
         flagDark = false;
        }
        else{
         flagDark = true;
        }
        flagDark = changeModeAction(flagDark);    
    }
    else{
     flagDark = false;
    }
    return flagDark;
}
