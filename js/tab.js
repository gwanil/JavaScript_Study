// 탭 기능 만들기 (for문)
// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// $('.tab-button')
//   .eq(0)
//   .click(function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
//   });

// val로 하면 안되고 let으로 해야함
function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}

// 이벤트 버블링 응용과 dataset
$('.list').click(function (e) {
  탭열기(e.target.dataset.id);
  // if (e.target == document.querySelectorAll('.tab-button')[0]) {
  //   탭열기(0);
  // }
  // if (e.target == document.querySelectorAll('.tab-button')[1]) {
  //   탭열기(1);
  // }
  // if (e.target == document.querySelectorAll('.tab-button')[2]) {
  //   탭열기(2);
  // }
});

// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button')
//     .eq(i)
//     .on('click', function () {
//       탭열기(i);
//     });
// }

// $('.tab-button')
//   .eq(1)
//   .on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
//   });

// $('.tab-button')
//   .eq(2)
//   .on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
//   });

// 탭 기능 만들기 (for문) 2
// for (var i = 0; i < 3; i++) {
//   console.log('안녕');
// }

// Array 와 Object 자료형
// var car = '소나타';
// var carPrice = 50000;
// var carColor = 'white';

// Array 자료형
var car = ['소나타', 50000, 'white'];
console.log(car[0]);
// 수정하는 방법
// car[0] = '아반떼';

// Object 자료형
// 약간 복잡한 Array & Object 데이터바인딩
var car2 = { name: '소나타', price: [50000, 3000, 4000] };
console.log(car2.price);
console.log(car2['price']);
// 수정하는 법
// car2.price = 60000;

$('#name').html(car2.name);
$('#price').html(car2.price[0]);
// document.querySelector('#price').innerHTML = car2.price[0];

// Select 인풋 다루기
// Select 3 : forEach, for, in 반복문

var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];

$('.form-select')
  .eq(0)
  .on('input', function (e) {
    // var value = $('.form-select').eq(0).val();
    var value = e.currentTarget.value;
    if (value == '셔츠') {
      $('.form-select').eq(1).removeClass('size');
    } else if (value == '바지') {
      $('.form-select').eq(1).removeClass('size');
      $('.form-select').eq(1).html('');
      // var 바지사이즈 = '<option>28</option>, <option>30</option>';
      // var 바지사이즈 = `<option>28</option> <option>30</option>`;
      // $('.form-select').eq(1).append(바지사이즈);

      // array에 붙일 수 있는 반복문
      // pants.forEach(function (a) {
      // arrow function
      pants.forEach((a) => {
        $('.form-select').eq(1).append(`<option>${a}</option>`);
      });
    }
  });

var obj = { name: 'kim', age: 20 };

for (var key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// Select 2 : 자바스크립트로 html 생성하는 법
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

var 템플릿 = '<p>안녕<p>';
// 추가해주는 문법
// document.querySelector('#test').insertAdjacentHTML('beforebegin', 템플릿);
// $('#test').append(템플릿);

// 갈아치워주는 문법
// document.querySelector('#test').innerHTML = 템플릿;
// $('#test').html(템플릿);
