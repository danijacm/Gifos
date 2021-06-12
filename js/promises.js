let apiKey = '7VLfcDqB9cFoBV9SoaafsbhC8SWsea7T';


/**
 * 
 * @returns Trending gif array
 */
export async function getTrendingGif(){
    let urlBase = 'https://api.giphy.com/v1/gifs/trending';    
    let response = await fetch(`${urlBase}?api_key=${apiKey}&limit=3&rating=pg-13`);
    response = await response.json();
    return response;
} 

/**
 * 
 * @returns 
 */
export async function getGifos(word){
    console.log('Word: ' + word);
    let urlBase = 'https://api.giphy.com/v1/gifs/search';   
    let response = await fetch(`${urlBase}?api_key=${apiKey}&q=${word}&limit=12&offset=0&rating=pg-13&lang=es`);
    response = await response.json();
    return response;
} 