// const categoryList = document.querySelectorAll('#categories > .item');
// const categoryName = document.querySelectorAll('.item > h2');
// const categories = document.querySelectorAll('.item > ul');

// const tabCategory = (numberOfCategories, categoryNames, categoryLength) => {

//     console.log(`Number of categories: ${numberOfCategories.length}`);
    
//     for (let i = 0; i < categoryNames.length; i++) {
//         console.log(" ");
//         console.log(categoryNames[i].textContent);
//         console.log(categoryLength[i].children.length);
//     }
// }

// tabCategory(categoryList, categoryName, categories);

const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`)

const tabCategory = (categories) => {
    for (const category of categories) {
        console.log(" ");
        console.log(`Category: ${category.querySelector('h2').textContent}`);
        console.log(`Elements: ${category.querySelectorAll('li').length}`);
    }
}

tabCategory(categories);