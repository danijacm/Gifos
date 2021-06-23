


function renderZoomGif(){
    let trendGifo = JSON.parse(localStorage.getItem('trendGifo'));
    let srcImag = trendGifo.images.original.url;
    console.log(srcImag);
    let img_gifo_zoom = document.getElementById('img_gifo_zoom');
    img_gifo_zoom.setAttribute('src', srcImag);
    
}

/*function downloadGifo(){

}*/

renderZoomGif();

