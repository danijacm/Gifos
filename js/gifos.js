/* API Key: 7VLfcDqB9cFoBV9SoaafsbhC8SWsea7T*/
window.onload = () => {
   let apiKey = '7VLfcDqB9cFoBV9SoaafsbhC8SWsea7T';
   let flagDark = false;    
   let logo_ppal = document.getElementById('logo_ppal'); 
   let m_dark_mode = document.getElementById('m_dark_mode');
   let title_home = document.getElementById('title_home');
   let nav_bar = document.getElementById('nav_bar');
   let logo_lupa = document.getElementById('logo_lupa');
   let input_search = document.getElementById('input_search');
   let label_trending = document.getElementById('label_trending');
   let parrafo_trend = document.getElementById('parrafo_trend');
   let sec_trending = document.getElementById('sec_trending');
   let trending_title = document.getElementById('trending_title');
   let trending_txt = document.getElementById('trending_txt');
   let foot_txt1 = document.getElementById('foot_txt1');
   let foot_txt2 = document.getElementById('foot_txt2');

   

   
   async function getTrendingGif(){
        let urlBase = 'https://api.giphy.com/v1/gifs/trending';    
        let response = await fetch(`${urlBase}?api_key=${apiKey}&limit=3&rating=pg-13`);
        response = await response.json();
        return response;
    }   
    
    function renderTrendingGifos(response){
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
   
   function changeModeAction(){
        document.body.classList.toggle('dark');
        /*title_home.classList.toggle('title-home-dark');*/
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
        document.getElementById('footer').classList.toggle('footer-section-dark'); 
        /*document.getElementById('foot_txt1').classList.toggle('foot-txt-dark');*/

        
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
        }
        else{   
            flagDark = false;
            changeLabelBurguer(flagDark);
            m_dark_mode.textContent = 'Modo Nocturno';
            nav_bar.classList.remove('nav-bar-darl');
            nav_bar.classList.add('nav-bar');
            logo_lupa.setAttribute('src', './img/icon-search.svg');
            logo_ppal.setAttribute('src', './img/logo-mobile.svg');
            input_search.style.color = "#000000" 
        }
   }
    

   getTrendingGif().then(
       (response) => {
           //console.log(response)
           renderTrendingGifos(response);
        }).catch(
            
        );


    m_dark_mode.addEventListener('click', () => {
        changeModeAction();
    });

    input_search.addEventListener('keypress', (event) => {

        if(flagDark === false){
            logo_lupa.setAttribute('src', './img/close.svg');
        }
        else{
            logo_lupa.setAttribute('src', './img/close-modo-noct.svg');
        }
        if(event.key=="Enter"){
            getMovie(title_movie.value).then(
                (response) => {
                    console.log(response);
                    renderInfoMovie(response);
                }
            )
        }
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