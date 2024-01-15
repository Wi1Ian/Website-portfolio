// import { TheCatAPI } from "@thatapicompany/thecatapi";

async function getImage() {
  const urls = 'https://api.thecatapi.com/v1/images/search?'
  const request = new Request(urls,{
    headers: {
        'x-api-key' : ' live_M9epSlRUOTisAsWJhFq91MU6lmxulWKGyEy27ZePDjJBYCev0qZrdeILgDISQ9nj ' ,
    }
  })
  try{
  const response = await fetch(request)
  const data = await response.json();
  let caturl = data[0].url;
  document.body.style.backgroundImage = `url(${caturl})`;
  } catch{
    console.log("error")
  }
}


getImage()
