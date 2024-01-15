// import { TheCatAPI } from "@thatapicompany/thecatapi";

async function getImage() {
  const urls = 'https://api.thecatapi.com/v1/images/search?'
  const request = new Request(urls,{
    headers: {
        'x-api-key' : ' live_M9epSlRUOTisAsWJhFq91MU6lmxulWKGyEy27ZePDjJBYCev0qZrdeILgDISQ9nj ' ,
    }
  })
  await fetch(request)
  .then(response => response.json())
  .then(data =>{
        let caturl = data[0].url;
        let catImg = document.createElement("img")
        catImg.setAttribute('src', `${caturl}`)
        let crazy = document.querySelector(".crazy")
        
        crazy.appendChild(catImg)
    });
}


getImage()
