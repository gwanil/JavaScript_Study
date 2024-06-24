let products = [];

// 상품목록 가져오기
$.get('/store.json').done((data) => {
  products = data.products;
  console.log(data.products);

  data.products.forEach((a) => {
    $('.product-lis').append(`<div class="col-md-3" id="card">
          <div class="card-body">
            <img src="/img/${a.photo}" class="w-100" />
            <h5>${a.title}</h5>
            <h5>${a.brand}</h5>
            <p>가격 : ${a.price}</p>
            <a href="#" class="btn btn-primary">담기</a>
          </div>
        </div>`);
  });
});

$('#search').on('input', function () {
  let 검색어 = $('#search').val();

  let newProducts = products.filter((a) => {
    return a.title.includes(검색어) || a.brand.includes(검색어);
  });

  $('.row').html('');
  newProducts.forEach((a, i) => {
    $('product-lis').append(`<div class="col-md-3" id="card">
          <div class="card-body">
            <img src="/img/${a.photo}" class="w-100" />
            <h5>${a.title}</h5>
            <h5>${a.brand}</h5>
            <p>가격 : ${a.price}</p>
            <a href="#" class="btn btn-primary">담기</a>
          </div>
        </div>`);
  });

  $('.product-lis').each(function (i, html요소) {
    let title = html요소.innerHTML;
    title = title.replace(검색어, `<span style="background : yellow">${검색어}</span>`);
    console.log(title);

    html요소.innerHTML = title;
  });
});
