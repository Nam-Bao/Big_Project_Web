const activeList =document.querySelectorAll(".items-combo");
console.log(activeList);

activeList[0].classList.add("items-acti")
activeList.forEach((e)=>{
   e.addEventListener("click",()=>{
      activeList.forEach((items)=>{
         items.classList.remove("items-acti")
      })
      e.classList.add("items-acti")
   })
})

const all_product = document.querySelector(".product");
const group1 = document.querySelector(".pro-nhua");
const group2 = document.querySelector(".pro-da");
const group3 = document.querySelector(".pro-vai");
activeList[0].addEventListener("click",()=>{
    all_product.style.display="block";
    group1.style.display="none";
    group2.style.display="none";
    group3.style.display="none";
})
activeList[1].addEventListener("click",()=>{
    all_product.style.display="none";
    group1.style.display="block";
    group2.style.display="none";
    group3.style.display="none";
})
activeList[2].addEventListener("click",()=>{
    all_product.style.display="none";
    group1.style.display="none";
    group2.style.display="block";
    group3.style.display="none";
})
activeList[3].addEventListener("click",()=>{
    all_product.style.display="none";
    group1.style.display="none";
    group2.style.display="none";
    group3.style.display="block";
})
// them gio hang
const listButton = document.querySelectorAll(".add-cart");

var listProduct = [];

listButton.forEach((e) => {
    e.addEventListener("click", () => {
        var validateLogin = localStorage.getItem('Login')==='true';
        if(validateLogin){
            const parent = e.closest(".card");
            const linkImg = parent.querySelector("img").getAttribute("src");
            const productName = parent.querySelector(".card-title").textContent;
            const productPrice = parent.querySelector(".card-text").textContent;
    
            var product = {
                Image: linkImg,
                prName: productName,
                prPrice: productPrice
            };
    
            listProduct.push(product);
    
            var productJson = JSON.stringify(listProduct);
    
            localStorage.setItem('listProduct', productJson);
        }
        else{
            $("#sign-in").modal("show")
        } 
    });
});
