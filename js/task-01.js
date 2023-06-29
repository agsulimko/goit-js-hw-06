const categoriesList = document.querySelector("#categories");
const totalElements = categoriesList.children.length;
console.log('Number of categories:', totalElements);

const h2 = document.querySelectorAll("h2");
// console.log(h2);
//  console.log(categoriesList);
const catList = document.querySelectorAll("#categories");
catList.forEach(element => {
    const firstListEl = element.firstElementChild;
    // console.log(firstListEl);
    // console.log(element);
    const firstCategoryEl = firstListEl.firstElementChild; 
    // console.log(firstCategoryEl.textContent);
   
    const firstItem = firstListEl.querySelectorAll('li').length;
    // console.log(firstItem);
console.log('Category :', firstCategoryEl.textContent);
console.log('Elements:', firstItem);
  

    const secondListEl = firstListEl.nextElementSibling;
    // console.log(secondListEl);
    const secondCategoryEl = secondListEl.firstElementChild; 
    //  console.log(secondCategoryEl.textContent);
    
 const secondItem = secondListEl.querySelectorAll('li').length;
    // console.log(secondItem);
console.log('Category :', secondCategoryEl.textContent);
console.log('Elements:', secondItem);


    const lastListEl = element.lastElementChild;
    //  console.log(lastListEl);
    const lastCategoryEl = lastListEl.firstElementChild; 
    // console.log(lastCategoryEl.textContent);
   
    const lastItem = lastListEl.querySelectorAll('li').length;
    // console.log(lastItem);

    console.log('Category :', lastCategoryEl.textContent);
console.log('Elements:', lastItem);
});











//   catList.forEach(element => {
    
//      const categoryName = element.querySelector("h2").textContent;
//     const categoryElements = document.querySelectorAll("li").length;
//     console.log('Category :', categoryName);
//     console.log('Elements:', categoryElements);
//     }
//    );


 

// ==================================
// const listCategories = document.querySelector("ul#categories");
// console.log(listCategories);
// console.log(listCategories.children);
// console.log("Number of categories:", listCategories.children.length);

//  listCategories.forEach(function(category, index){
//      const categorytitleEl = category.querySelector("h2");
//      console.log(categorytitleEl);
//      console.log(titleEl.textContent);
//      console.log(titleEl);
//   const categoryElements = category.querySelectorAll("li").length;
//      console.log('Category :', titleEl.textContent);
//  console.log('Elements: ', categoryElements);
//  });
// // /===============================================

//     console.log("Elements:", listElements.length );


// const firstItemChildEl = firstItemEl.firstElementChild;
// // // console.log(firstItemChildEl);



 
// const firstItemChildEl = firstItemEl.firstElementChild;
// // // console.log(firstItemChildEl);

// console.log("Number of categories:", listCategories.length);

// const firstItemEl = document.querySelector(".item");
// // console.log(firstItemEl);
// const firstItemChildEl = firstItemEl.firstElementChild;
// // console.log(firstItemChildEl);
// console.log("Category:", firstItemChildEl.textContent); 
// const firstList = firstItemEl.querySelectorAll("li"); 
// console.dir(firstList[0]);
// console.log("Elements:", firstList.length);



// const secondItemEl = firstItemEl.nextElementSibling;
// //  console.log(secondItemEl);
// const secondItemChildEl = secondItemEl.firstElementChild;
// // console.log(secondItemChildEl);
// console.log("Category:", secondItemChildEl.textContent); 
// const secondList = secondItemEl.querySelectorAll("li"); 
// console.log("Elements:", secondList.length);


// const lastItemEl = secondItemEl.nextElementSibling;
// //  console.log(lastItemEl);
// const lastItemChildEl = lastItemEl.firstElementChild;
// //  console.log(lastItemChildEl);
// console.log("Category:", lastItemChildEl.textContent); 
// const lastList = secondItemEl.querySelectorAll("li"); 
// console.log("Elements:", lastList.length);


// ========================================================
// Вариант кода №2
// const listCategories = document.querySelectorAll("h2");
// console.log("Number of categories:", listCategories.length);

// const firstItemEl = document.querySelector(".item");
// // console.log(firstItemEl);
// const firstItemChildEl = firstItemEl.firstElementChild;
// // console.log(firstItemChildEl);
// console.log("Category:", firstItemChildEl.textContent); 
// const firstList = firstItemEl.querySelectorAll("li"); 
// console.log("Elements:", firstList.length);



// const secondItemEl = firstItemEl.nextElementSibling;
//  console.log(secondItemEl);
// const secondItemChildEl = secondItemEl.firstElementChild;
// // console.log(secondItemChildEl);
// console.log("Category:", secondItemChildEl.textContent); 
// const secondList = secondItemEl.querySelectorAll("li"); 
// console.log("Elements:", secondList.length);


// const lastItemEl = secondItemEl.nextElementSibling;
// //  console.log(lastItemEl);
// const lastItemChildEl = lastItemEl.firstElementChild;
// //  console.log(lastItemChildEl);
// console.log("Category:", lastItemChildEl.textContent); 
// const lastList = secondItemEl.querySelectorAll("li"); 
// console.log("Elements:", lastList.length);





// ====================================================

// Вариант кода №3
// const listCategories = document.querySelectorAll("h2");
// console.log("Number of categories:", listCategories.length);
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