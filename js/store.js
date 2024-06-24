let products = [];

// 상품목록 가져오기
$.get('/store.json').done((data) => {
  products = data.products;
  console.log(data.products);

  data.products.forEach((a) => {
    $('.row').append(`<div class="col-md-3" id="card">
          <div class="card-body">
            <img src="/img/${a.photo}" class="w-100" />
            <h5>${a.title}</h5>
            <p>${a.brand}</p>
            <p>가격 : ${a.price}</p>
            <a href="#" class="btn btn-primary">담기</a>
          </div>
        </div>`);
  });
});
