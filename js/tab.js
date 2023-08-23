// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

$('.tab-button')
  .eq(0)
  .on('click', function () {
    $('.tab-button').eq(0).addClass('.orange');
  });

// $('.tab-button')
//   .eq(0)
//   .click(function () {});
