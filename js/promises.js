let apiKey = '7VLfcDqB9cFoBV9SoaafsbhC8SWsea7T';


/**
 * 
 * @returns 
 */
export async function getTrendingGif(){
    let urlBase = 'https://api.giphy.com/v1/gifs/trending';    
    let response = await fetch(`${urlBase}?api_key=${apiKey}&limit=3&rating=pg-13`);
    response = await response.json();
    return response;
} 
