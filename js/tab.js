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
var car2 = { name: '소나타', price: 50000 };
console.log(car2.price);
console.log(car2['price']);
// 수정하는 법
// car2.price = 60000;
