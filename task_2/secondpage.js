var card_product = document.getElementsByClassName('card');

for (var i = 0; i < card_product.length; i++) {
    card_product[i].addEventListener('click', function() {
        var parentElement = this.closest('.card');
        var card_image = parentElement.getElementsByClassName('card-img-top')[0];
        var image_src = card_image.getAttribute('src');
        var card_name = parentElement.getElementsByClassName("card-title")[0].innerHTML;
        console.log(card_name);
        var card_lb = parentElement.getElementsByClassName('cartcenter')[0].innerHTML;
        console.log(card_lb);
        // var card_price = parentElement.getElementsByClassName('price')[0].innerHTML;
        var card_price = parentElement.querySelector('.price').innerHTML;


        document.getElementById('inpop-product').innerHTML += `<img src="${image_src}" class"">`
        document.querySelector('#name-input').value = card_name;
        document.querySelector('#unit-input').value = card_lb;
        document.querySelector('#price-input').value = card_price;



    })
}