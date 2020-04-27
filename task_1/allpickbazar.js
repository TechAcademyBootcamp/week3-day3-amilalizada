var card_all = document.getElementsByClassName('card');
for (var i = 0; i < card_all.length; i++) {
    card_all[i].addEventListener('click', function(event) {
            var clicked_element = event.target;
            // console.log(clicked_element.closest('.add_cart'));
            if (clicked_element.closest('.add_cart') != null) {
                var card_image = this.getElementsByClassName('card-img-top')[0].getAttribute("src");
                var card_title = this.getElementsByClassName('card-title')[0].innerHTML;
                var card_price = this.getElementsByClassName('card-price')[0].innerHTML;
                var card_pcs = this.getElementsByClassName('cartcenter')[0].innerHTML;

                document.getElementsByClassName('no-products')[0].classList.add(`d-none`);

                var array_total = document.getElementById('card-products').querySelectorAll('.card-total');

                var counter = 1;
                var item_count = 1;
                var card_count = document.querySelector(`[products-title="${card_title}"]`);
                // item_count++;


                if (card_count) {
                    counter = parseInt(card_count.querySelector('.count').textContent);
                    counter++;
                    card_count.querySelector('.count').innerHTML = counter;
                    var usd_price = card_price.replace('$', '');

                    card_price = parseInt(card_price);

                    var card_total = counter * usd_price;
                    card_count.querySelector('.card-total').innerText = `${card_total}`;

                    var first_sum = 0;
                    for (var i = 0; i < array_total.length; i++) {
                        first_sum += parseInt(array_total[i].textContent);
                        // console.log(first_sum);

                        document.getElementById('summa-2').innerHTML = `$${first_sum}`;
                        document.getElementById('summa-1').innerHTML = `$${first_sum}`;
                    }



                    return false;
                }

                item_count++;
                console.log(item_count);


                document.getElementById('item-count-1').innerHTML = `${item_count} item`;
                document.getElementById('item-count-2').innerHTML = `${item_count} item`;








                document.getElementById('card-products').innerHTML += `<div class="card" products-title="${card_title}">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${card_image}"class="card-img" alt="..." >                
                    </div>
                    <div class="col-md-8">
                        <div class="card-body row">
                            <div>
                                <h5 class="card-title jstitle">${card_title}</h5>
                                <p class="card-text jsprice">${card_price}</p>
                                <p class="card-text jspcs"><span class="count">${counter}</span>X ${card_pcs}</p>
                            </div>
                            <div class="fortotal row">
                                <span>$</span>
                                <span class="card-total">${card_price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                    // let cardProducts = document.getElementById('card-products');
                    // let js_card = document.createElement('div');
                    // js_card.classList.add('card');
                    // js_card.setAttribute('products-title');
                    // let first_row = document.createElement('div');
                    // first_row.classList.add('row', 'no-gutters');
                    // let first_col = document.createElement('div');
                    // first_col.classList.add('col-md-4');
                let jsImgCard = document.createElement('img);
                    jsImgCard.setAttribute('src'); jsImgCard.classList.add('card-img'); jsImgCard.classList.add('alt')




                }
                else {
                    document.getElementsByClassName('btn-primary')[0].click();
                }
            });

    }