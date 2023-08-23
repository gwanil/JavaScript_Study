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
for (let i = 0; i < 3; i++) {
  $('.tab-button')
    .eq(i)
    .on('click', function () {
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(i).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    });
}

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
