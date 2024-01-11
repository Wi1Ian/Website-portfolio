import Header from '../Components/Header'
// import './Hobbies.css'
import { TheCatAPI } from "@thatapicompany/thecatapi";
//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "live_M9epSlRUOTisAsWJhFq91MU6lmxulWKGyEy27ZePDjJBYCev0qZrdeILgDISQ9nj"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});
export default function Hobbies() {
    return(
        <>
            <Header />
            <br />
            
            <h2 className= 'MainHeader'>Hobbies page</h2>            
            <p1>Hello my name is jay</p1>
            <div id='grid' class = "imgrid"></div>
        </>
    )
}