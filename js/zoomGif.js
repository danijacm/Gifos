let dwld_icon = document.getElementById('dwld_icon');
let userName = document.getElementById('userName');
let titleGifo = document.getElementById('titleGifo');
let logo_close = document.getElementById('logo_close');
let fav_icon = document.getElementById('fav_icon');
let like = false;
let arrayFav = [];


//Función que dibuja la página del Zoom del Gif
function renderZoomGif(){
    let trendGifo = JSON.parse(localStorage.getItem('selectedGif'));
    let srcImag = trendGifo.images.original.url;
    //console.log(srcImag);
    let img_gifo_zoom = document.getElementById('img_gifo_zoom');
    img_gifo_zoom.setAttribute('src', srcImag);
    userName.textContent = trendGifo.username;
    titleGifo.textContent = trendGifo.title.substr(0, 15);
}

//Función que permite descargar el archivo.gif
function downloadGifo(){
    let trendGifo = JSON.parse(localStorage.getItem('selectedGif'));
    let url = trendGifo.images.downsized_medium.url;
    let fileName = trendGifo.title;
    fetch(url).then(
        (response) => {
            return response.blob().then(
                (response) => {
                    let newElement = document.createElement('a');
                    newElement.href = URL.createObjectURL(response);
                    newElement.setAttribute('download', fileName);
                    newElement.click();
                }
            )
        }
    )
}


//--Función que permite guardar o eliminar un Gif de la lista de favoritos--
function seveDeleteGifoOnFav(){
    let selectedGif = JSON.parse(localStorage.getItem('selectedGif'));
    let varAux = JSON.parse(localStorage.getItem('favGifArray'));
    let positionGif;
    if( varAux != null){
        arrayFav = varAux;
        //console.log('longitud arrayFav = ' + arrayFav.length);
        if(arrayFav.length > 0){
            positionGif = arrayFav.findIndex(item => {
                return item.id === selectedGif.id;
            });
            //resultFilter = arrayFav.filter(gif => gif.id == selectedGif.id);
        }
        if(positionGif < 0 ){
            arrayFav.push(selectedGif);
            localStorage.setItem('favGifArray', JSON.stringify(arrayFav));    
        }
        else{
            arrayFav.splice(positionGif, 1);
            localStorage.setItem('favGifArray', JSON.stringify(arrayFav));  
        }
    }
    else{
        arrayFav.push(selectedGif);
        localStorage.setItem('favGifArray', JSON.stringify(arrayFav));
    }
}




dwld_icon.addEventListener('click', () => {
    downloadGifo();
});

logo_close.addEventListener('click', () => {
    window.location.href = "./index.html"; 
});

dwld_icon.onmouseenter = function(){
    let srcImg = './img/icon-download-hover.svg';
    dwld_icon.setAttribute('src', srcImg); 
}

dwld_icon.onmouseout = function(){
    let srcImg = './img/icon-download.svg';
    dwld_icon.setAttribute('src', srcImg); 
}

fav_icon.onclick = function(){
    let srcImg;
    if(!like){
        srcImg = './img/icon-fav-active.svg';
        like = true;
    }
    else{
        srcImg = './img/icon-fav-hover.svg';
        like = false;
    }    
    fav_icon.setAttribute('src', srcImg); 

    seveGifoOnFav();
}

renderZoomGif();
