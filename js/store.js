let products = [];

$.get('/store.json').then((data) => {
  products = data.products;

  data.products.forEach((a) => {
    $('.row').append(`<div class="card col-sm-3" id="card">
          <div class="card-body">
            <img src="/img/${a.photo}" class="w-100" />
            <h5>${a.title}</h5>
            <p>${a.brand}</p>
            <p>가격 : ${a.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`);
  });
});
