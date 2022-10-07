const Hamburger = document.querySelector("#hamburger");
const closed = document.querySelector("#close");
const navContent = document.querySelector(".nav-content");
const lightBoxClose = document.querySelector("#light-box-close");
const lightBox = document.querySelector(".light-box");
const imgBig = document.querySelector(".img-big");
const lightBoxImgBig = document.querySelector(".light-box-img-big");
const thumbnail = document.querySelectorAll(".thumbnail");
const cart = document.querySelector(".cart-container");
const orderCart = document.querySelector(".order-cart");
const thumb1 = document.querySelector(".thumb-1");
const thumb2 = document.querySelector(".thumb-2");
const thumb3 = document.querySelector(".thumb-3");
const thumb4 = document.querySelector(".thumb-4");
const lightBoxThumb1 = document.querySelector(".light-box-thumb-1");
const lightBoxThumb2 = document.querySelector(".light-box-thumb-2");
const lightBoxThumb3 = document.querySelector(".light-box-thumb-3");
const lightBoxThumb4 = document.querySelector(".light-box-thumb-4");
const cartClose = document.querySelector("#cart-close");
const Delete = document.querySelector("#delete"); 
const orderInfoContainer = document.querySelector(".order-info-container"); 
const orderButton = document.querySelector("#order-button"); 
const cartEmpty = document.querySelector(".cart-empty");
const orderComplete = document.querySelector(".order-complete");
const orderNumber = document.querySelector("#order-number");
const cartNumber = document.querySelector("#cart-number");
const iconCartNumber = document.querySelector("#icon-cart-number");
var orderAmount = 0;
var priceAmount = 0;
const price = document.querySelector("#price");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const addToCart = document.querySelector(".add-to-cart");
const checkOut = document.querySelector("#order-button");
const errorMessage = document.querySelector("#error-message");


if(orderAmount === 0){
    orderInfoContainer.style.display = "none"
    cartEmpty.style.display = "block";
} else{
    orderInfoContainer.style.display = "flex";
    cartEmpty.style.display = "none";
}

Hamburger.addEventListener("click", function(){
    navContent.classList.toggle("display");
});
Delete.addEventListener("click", function(){
    orderInfoContainer.style.display = "none";
    cartEmpty.style.display = "block";
    orderNumber.textContent = 0;
    cartNumber.textContent = 0;
    priceAmount = 0;
    orderAmount = 0;
    cartNumber.style.display = "none";
})
closed.addEventListener("click", function(){
    navContent.classList.toggle("display");
});
cart.addEventListener("click", function(){
    orderCart.style.display = "flex";
});
cartClose.addEventListener("click", function(){
    orderCart.style.display = "none";
});
imgBig.addEventListener("click", function(){
    lightBox.style.display = "flex";
    orderCart.style.display = "none";
});
lightBoxClose.addEventListener("click", function(){
    lightBox.style.display = "none"
});
thumb1.addEventListener("click", function(){
    imgBig.setAttribute("src", "images/image-product-1.jpg");
    this.classList.toggle("border")
})
thumb2.addEventListener("click", function(){
    imgBig.setAttribute("src", "images/image-product-2.jpg");
    this.classList.toggle("border")
})
thumb3.addEventListener("click", function(){
    imgBig.setAttribute("src", "images/image-product-3.jpg");
    this.classList.toggle("border")
})
thumb4.addEventListener("click", function(){
    imgBig.setAttribute("src", "images/image-product-4.jpg");
    this.classList.toggle("border")
})
lightBoxThumb1.addEventListener("click", function(){
    lightBoxImgBig.setAttribute("src", "images/image-product-1.jpg");
    this.classList.toggle("border")
})
lightBoxThumb2.addEventListener("click", function(){
    lightBoxImgBig.setAttribute("src", "images/image-product-2.jpg");
    this.classList.toggle("border")
})
lightBoxThumb3.addEventListener("click", function(){
    lightBoxImgBig.setAttribute("src", "images/image-product-3.jpg");
    this.classList.toggle("border")
})
lightBoxThumb4.addEventListener("click", function(){
    lightBoxImgBig.setAttribute("src", "images/image-product-4.jpg");
    this.classList.toggle("border")
});
plus.addEventListener("click", function(){
    orderAmount++;
    priceAmount+= 125;
    // price.textContent = priceAmount;
    orderNumber.textContent = orderAmount;
    
    
})
minus.addEventListener("click", function(){
    if(orderAmount === 0){
        orderAmount;
        cartEmpty.style.display = "block";
        orderInfoContainer.style.display = "none";
    } else{
        orderAmount--;
    };

    if(priceAmount === 0){
        priceAmount;
    } else{
        priceAmount-= 125;
    };
    
    orderNumber.textContent = orderAmount;
    
});
addToCart.addEventListener("click", function(){
    if(orderAmount === 0){
        orderInfoContainer.style.display = "none";
        cartEmpty.style.display = "block";
        cartNumber.style.display = "none";
        errorMessage.style.display = "block";
    } else{
        orderInfoContainer.style.display = "flex";
        cartEmpty.style.display = "none";
        cartNumber.style.display = "block";
        errorMessage.style.display = "none";
    }
    orderComplete.style.display = "none";
    price.textContent = priceAmount;
    iconCartNumber.textContent = orderAmount;
    cartNumber.textContent = orderAmount;
    
});
checkOut.addEventListener("click", function(){
    orderInfoContainer.style.display = "none";
    orderComplete.style.display = "block";
    orderNumber.textContent = 0;
    cartNumber.textContent = 0;
    priceAmount = 0;
    orderAmount = 0;
    cartNumber.style.display = "none";
})
cartEmpty.style.display = "block";