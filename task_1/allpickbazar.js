var card_all = document.getElementsByClassName('card');
for (var i = 0; i < card_all.length; i++) {
    card_all[i].addEventListener('click', function(event) {
        var clicked_element = event.target;
        // console.log(clicked_element);
        console.log(clicked_element.closest('.add_cart'));
        if (clicked_element.closest('.add_cart') != null) {
            // console.log('nese');
            // var childiren_1 = this.children
            var card_image = this.getElementsByClassName('card-img-top')[0].getAttribute("src");
            var card_title = this.getElementsByClassName('card-title')[0].innerHTML;
            var card_price = this.getElementsByClassName('card-price')[0].innerHTML;
            var card_pcs = this.getElementsByClassName('cartcenter')[0].innerHTML;




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
                <span class="count"></span>
                    <h5 class="card-title jstitle">${card_title}</h5>
                    <p class="card-text jsprice">${card_price}</p>
                    <p class="card-text jspcs">${card_pcs}</p>
                </div>
            </div>
        </div>
    </div>`

            }
        } else {
            document.getElementsByClassName('btn-primary')[0].click();
            console.log(document.getElementsByClassName('btn-primary'));

        }
    });

}