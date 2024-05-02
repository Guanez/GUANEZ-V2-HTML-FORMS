$(document).ready(function(){
    $(".category__content").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:5
            }
        }
    });
});


$(document).ready(function(){
    $('.new-products-carousel').owlCarousel({
        items: 8,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemId = button.getAttribute('data-item-id');
            var counterElement = document.getElementById("cart-counter-" + itemId);
            var currentCount = parseInt(counterElement.innerText);
            var newCount = currentCount + 1;
            counterElement.innerText = newCount;
        });
    });
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
