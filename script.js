console.clear();

// div-01 엘리먼트 앞
$('.div-01').next(); // 해당 엘리먼트 앞에꺼를 선택하는 태그
$('.div-01').next('div');

// div-01 엘리먼트 뒤
$('.div-01').prev('');  // 해당 엘리먼트 뒤에꺼를 선택하는 태그
$('.div-01').prev('div');

// div-01 엘리먼트 자식
$('.div-01 > div');
$('.div-01 > .div');
$('.div-01 > #div');

$('.box').children().last().css('background-color','red');
// box 엘리먼트 자식중에 마지막 엘리먼트

$('.box > div:nth-child(odd)').css('background-color','blue');
// box 엘리먼트 자식중에 홀수번째 엘리먼트

$('.div-01 > .box').children().eq(0).css('background-color','pink');
// div-01 엘리먼트 자식중에 첫번째 엘리먼트

$('.box > div:nth-child(even)').css('background-color','yellow');
// box 엘리먼트 자식중에 짝수번째 엘리먼트

$('.box').find('.날찾아봐').css('background-color','green');
// box 엘리먼트 자식중에 클래스(날찾아봐) 엘리먼트

$('.날찾아봐').parent('div').parent('.div-01').css('background-color','grey');
// 자식 입장에서 부모(parent) 엘리먼트 찾아내기(v1)

$('.날찾아봐').closest('.div-01').css('background-color','gold');
// 자식 입장에서 부모(parent) 엘리먼트 찾아내기(v2)(가장 가까운 상위 요소를 탐색하여 선택기와 일치)




