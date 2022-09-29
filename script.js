 const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/436121'
// uncomment next line to run mutiple images artwork test case: 
//const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/436535'
async function fetchMetApi() {
    const response = await fetch(url);
    const data = await response.json();


    const title = data.title
    const artist = data.artistDisplayName;
    const primaryImageUrl =data.primaryImage;
    const additionalImgArr = data.additionalImages;
    const primaryImage = document.getElementById('the_artwork');
    const additionalImages = document.getElementById("addtionalimages");
    
    const artworkTitle =document.getElementById("artwork_title")
    const artistName =document.getElementById("artist_name");
   

    artworkTitle.innerText=title;
    artistName.innerText=`By ${artist}`;
   


   //adding primary image
    let elem = document.createElement("img");
    elem.setAttribute("src",primaryImageUrl);
    elem.setAttribute('class','image')
    primaryImage.insertBefore(elem, primaryImage.firstChild);

   //Run as there are more than one images of the artwork
    if(additionalImgArr.length>0){
        additionalImgArr.forEach((srcUrl)=>{
            
            const additionalImage = document.createElement("img");
            let currUrl=srcUrl;
            
            additionalImage.setAttribute("src", currUrl);
            additionalImage.setAttribute("class", 'imgage');
            additionalImage.style.width = "150px";
            additionalImage.style.padding = "10px";
            additionalImage.addEventListener('click',()=>{
           
            let preUrl=elem.src;
            additionalImage.src=preUrl;
            elem.src = currUrl;
            currUrl=additionalImage.src;
            preUrl=elem.src;
           
           
           })
           additionalImages.appendChild(additionalImage);
           
          
        })
    }


    

}
fetchMetApi()
