// import { TheCatAPI } from "@thatapicompany/thecatapi";
let refresh = document.querySelector(".refresh")

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
  // document.body.style.backgroundImage = `url(${caturl})`;
  let catImg = document.createElement("img")
  catImg.setAttribute('src', `${caturl}`)
  let crazy = document.querySelector(".crazy")
//   button.addEventListener("click", clicked())
  catImg.style.width = "200px"
  catImg.style.height = "200px"
  catImg.style.objectFit = "cover"
  catImg.style.border = "2px solid black"
    crazy.appendChild(catImg)
  } catch{
    console.log("error")
  }
}
refresh.addEventListener("click", getImage, true);

getImage()