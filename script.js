const api_key = 'r6GfkyzglRGKUwYK_g8Nhj-sxYaS15Mg52nnzbm337A'
const base_url = 'https://api.unsplash.com/'
const imgContainer = document.getElementById('imgContainer')
const getBtn = document.getElementById('getBtn')
const searchInput = document.querySelector('#searchInput')


function getImage(query){
  const url = `${base_url}search/photos?client_id=${api_key}&query=${query}`;
   
  fetch(url).then(response =>response.json()).then(data=>{displayImg(data.results)}).catch(error => {
            console.error('Error fetching images:', error);
            msg.style.display = "block"
        });
}

function displayImg(images){
    imgContainer.innerHTML = '';
   
    if(images.length == 0){
      msg.style.display = "block"
    }


    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.regular;
      const innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-cont');
        
        innerContainer.style.backgroundImage = `url('${imgElement.src}')`; 
        innerContainer.style.backgroundSize = "cover"
        innerContainer.style.backgroundPosition = "center"
        imgContainer.appendChild(innerContainer);


        innerContainer.addEventListener("click",()=>{
         // console.log(`url('${imgElement.src}')`)
         
         const cancelDiv = document.createElement('div')
      const showImg = document.createElement('div')
     const cancelBtn = document.createElement('div')
     cancelBtn.innerHTML = '<i class="ri-arrow-right-up-line"></i>'
     cancelBtn.classList.add('cancelBtn')
     cancelBtn.addEventListener("click",()=>{
      showImg.style.display="none"
     })
     showImg.appendChild(cancelBtn)
     showImg.classList.add('showImage')
      
      showImg.style.backgroundImage = `url('${imgElement.src}')`
      showImg.style.backgroundPosition = "center"
      showImg.style.backgroundSize = "cover"
         
         imgContainer.appendChild(showImg)
        })
    });
  }



  function searchImages() {
    const query = searchInput.value.trim();
    if(query != " "){getImage(query);}
    
    
 
}

getBtn.addEventListener("click",searchImages)
