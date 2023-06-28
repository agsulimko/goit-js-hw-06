const listCategories = document.querySelectorAll("h2");
console.log("Number of categories:", listCategories.length);

const firstItemEl = document.querySelector(".item");
// console.log(firstItemEl);
const firstItemChildEl = firstItemEl.firstElementChild;
// console.log(firstItemChildEl);
console.log("Category:", firstItemChildEl.textContent); 
const firstList = firstItemEl.querySelectorAll("li"); 
console.log("Elements:", firstList.length);



const secondItemEl = firstItemEl.nextElementSibling;
//  console.log(secondItemEl);
const secondItemChildEl = secondItemEl.firstElementChild;
// console.log(secondItemChildEl);
console.log("Category:", secondItemChildEl.textContent); 
const secondList = secondItemEl.querySelectorAll("li"); 
console.log("Elements:", secondList.length);


const lastItemEl = secondItemEl.nextElementSibling;
//  console.log(lastItemEl);
const lastItemChildEl = lastItemEl.firstElementChild;
//  console.log(lastItemChildEl);
console.log("Category:", lastItemChildEl.textContent); 
const lastList = secondItemEl.querySelectorAll("li"); 
console.log("Elements:", lastList.length);







// Вариант кода №2

// listCategories.forEach(function (number, index) {
    
//     console.log("Category:", listCategories[index].textContent);
//     const siblingCategories = listCategories[index].nextElementSibling;
    
// const listElements = siblingCategories.querySelectorAll("li");
   
//     console.log("Elements:", listElements.length );    
//  });



// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5






