const categoriesli = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesli.length}`);
categoriesli.forEach (item => {
    console.log (`Category: ${item.firstElementChild.textContent} `);
    console.log (`Elements: ${item.lastElementChild.querySelectorAll('li').length}`);
});

