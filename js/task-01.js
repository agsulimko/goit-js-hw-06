const listCategories = document.querySelectorAll("h2");

console.log("Number of categories:", listCategories.length);

listCategories.forEach(function (number, index) {
    
    console.log("Category:", listCategories[index].textContent);
    const siblingCategories = listCategories[index].nextElementSibling;
    
const listElements = siblingCategories.querySelectorAll("li");
   
    console.log("Elements:", listElements.length );

    
    
 });



// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5






