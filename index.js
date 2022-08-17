'use strict';

console.clear();

// // html(), text()
// $('#btn1').on('click', function(){
//     const msg = $('p').html();
//     $('#output').html(msg);
// })

// $('#btn2').on('click', function(){
//     const msg = $('p1').text();
//     $('#output').html(msg);
// })

// width()
// width : padding 안쪽 크기
// innerWidth : border 안쪽 크기
// outerWidth : border 포함 크기
$('body').ready(function(){
    const ybyWidth = $('p1').width();
    const ybyinnerWidth = $('p1').innerWidth();
    const ybyOuterWidth = $('p1').outerWidth();
    $( 'p1' ).after( '<p>Width = ' + ybyWidth + ', Inner Width = ' + ybyinnerWidth + ', Outer Width = ' + ybyOuterWidth + '</p>' );
})

// heigth()
// height() : 내부높이
// innerHeight() : 내부높이 + padding
// outerHeight() : 내부높이 + padding + border
// outerHeight(true) : 내부높이 + padding + border + margin
$('body').ready(function(){
    const ybyheigth = $('p2').heigth();
    const ybyinnerheigth = $('p2').innerHeigth();
    const ybyOuterheigth = $('p2').outerHeigth();
    const ybyOuterheigthTrue = $('p2').outerHeigth(true);
    $( 'p2' ).after( '<p>heigth = ' + ybyheigth + ', Inner heigth = ' + ybyinnerheigth + ', Outer heigth = ' + ybyOuterheigth + 'ybyOuterheigthTrue = ' + outerHeigth + '</p>' );
})