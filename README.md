# Entera_Assessment

## Approach 

* Confirmed that the provided Met Museum API endpoint was returning valid responses.
* Analyzed the returned json data from the response to determine which data was relevant to the task.
* Addtional consideration:
  * In the returned JSON data from the api, there is a property named “additionalImages” which contains an array data type for multiple image urls. That means some artworks of Met Museum collections might have multiple images to display. While the demo case of the provided API in this assessment instruction only has one image, I chose to write additional code to accommodate this case.
  * [Test case api with multiple images](https://collectionapi.metmuseum.org/public/collection/v1/objects/436535)  
 


