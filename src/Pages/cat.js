// import { TheCatAPI } from "@thatapicompany/thecatapi";
const url = 'https://api.thecatapi.com/v1/images/search?'
const api_key = 'live_M9epSlRUOTisAsWJhFq91MU6lmxulWKGyEy27ZePDjJBYCev0qZrdeILgDISQ9nj'
async function getImage() {
  const request = new Request(url,{
    headers: {
        'x-api-key' : ' live_M9epSlRUOTisAsWJhFq91MU6lmxulWKGyEy27ZePDjJBYCev0qZrdeILgDISQ9nj ' 
    }
  })
  const response = await fetch(request)
  const data = await response.json()
  return data;
}

(async () => {
    const urls2 = await getImage()
    console.log(urls)
})()
