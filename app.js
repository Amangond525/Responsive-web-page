// showing nav bar when click//
const mobile = document.querySelector('menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");

})
//// close when click

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector("is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//menu scrole

var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function (e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function (e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"

    });

});

function toggleCartpopup(){
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');

}

function addToCart(itemName,itemPrice) {
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent=== itemName);
    if(existingItem) {
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
        existingItem.querySelector('.item-count').textContent = itemCount;

        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);

    }else{
        const newRow = cartItems.insertRow();
        newRow.innerHTML=`
        <td>${itemName}</td>
        <td class='item-count>1</td>
        <td class= 'item-price'>${itemPrice}</td>
        <td class= 'item-total'>${itemPrice}</td>
        `;
    }
}




















<script  src="http://code.jquery.com/jquery-2.2.4.min.js"></script>