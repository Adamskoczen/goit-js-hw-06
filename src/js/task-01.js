const categoryList = document.querySelectorAll('#categories > .item');
const categoryName = document.querySelectorAll('.item > h2');
const categories = document.querySelectorAll('.item > ul');

const tabCategory = (numberOfCategories, categoryNames, categoryLength) => {

    console.log(`Number of categories: ${numberOfCategories.length}`);
    
    for (let i = 0; i < categoryNames.length; i++) {
        console.log(" ");
        console.log(categoryNames[i].textContent);
        console.log(categoryLength[i].children.length);
    }
}

tabCategory(categoryList, categoryName, categories);