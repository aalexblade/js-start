const liRef = document.querySelector("#categories");
const itemRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${liRef.children.length}`);

itemRef.forEach(elem => {
    const categoryNameRef = elem.querySelector("h2").textContent;
    const categoryItemRef = elem.querySelectorAll("li").length;

    console.log("Category:", categoryNameRef)
    console.log("Elements:", categoryItemRef)

})