const categoriesTitle = document.querySelectorAll("h2");
 console.log(`Number of categories: ${categoriesTitle.length}`);
//  console.log(categoriesTitle);

const itemsElement = document.querySelectorAll(".item");
// console.log(itemsElement);
itemsElement.forEach(function (number, index) {
  // console.log(number);
  console.log("Category: ", number.firstElementChild.textContent);
  console.log("Elements: ", number.lastElementChild.children.length);
});












// ====================================================================


// const categoriesTitle = document.querySelectorAll("h2");
// console.log(`Number of categories: ${categoriesTitle.length}`);
// // console.log(categoriesTitle);
 
//  categoriesTitle.forEach( function (number, index){
//       console.log(number);
//    const elements = number.nextElementSibling;
   
//       const totalElements = elements.querySelectorAll('li').length;
//      const categoryName = number.textContent;
//     //  console.log(totalElements);
//     //  console.log(categoryName);
//     //  console.log(elements);
 
//      console.log(`Category : ${categoryName}`);
//       console.log(`Elements: ${totalElements}`);
//   }
//   );



//



// Вариант кода №3
// const listCategories = document.querySelectorAll("h2");
// console.log("Number of categories:", listCategories.length);
// listCategories.forEach(function (number, index) {
    
//     console.log("Category:", listCategories[index].textContent);
//     const siblingCategories = listCategories[index].nextElementSibling;
    
// const listElements = siblingCategories.querySelectorAll("li");
   
//     console.log("Elements:", listElements.length );
//  });

// ============================
// const categoriesAll = document.querySelector("#categories");
// const categoriesLength = categoriesAll.children.length;
// console.log(`Number of categories: ${categoriesLength}`);

// const itemsElement = document.querySelectorAll(".item");
// itemsElement.forEach((item) => {
//   console.log("Category: ", item.firstElementChild.textContent);
//   console.log("Elements: ", item.lastElementChild.children.length);
// });
// ============================


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5