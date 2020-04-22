var cartButton = document.getElementsByClassName('add_cart');
// console.log(cartButton);

for (var i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', function() {;
        var parentElement = this.closest('.card');

        var card_image = parentElement.getElementsByClassName('card-img-top')[0].getAttribute("src");



        var card_title = parentElement.getElementsByClassName('card-title')[0].innerHTML;

        var card_price = parentElement.getElementsByClassName('card-price')[0].innerHTML;
        var card_pcs = parentElement.getElementsByClassName('cartcenter')[0].innerHTML;
        console.log(card_price);

        // var es = document.getElementById('card-products').children;
        // for (var i = 0; i < es.length; i++) {
        //     if (es[i].getAttribute('products-title') == card_title) {
        //         return false;
        //     }
        // }
        document.getElementsByClassName('no-products')[0].classList.add(`d-none`);
        var es = Array.from(document.getElementById('card-products').children).filter((element) => {
            return element.getAttribute('products-title') == card_title;
        });
        if (es.length == 0) {
            document.getElementById('card-products').innerHTML += `<div class="card" products-title="${card_title}">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${card_image}"class="card-img" alt="..." >
                
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title jstitle">${card_title}</h5>
                    <p class="card-text jsprice">${card_price}</p>
                    <p class="card-text jspcs">${card_pcs}</p>
                </div>
            </div>
        </div>
    </div>`
        }
    });

}