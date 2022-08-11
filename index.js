// .eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
// $("선택자").eq("숫자");

// eq() 탐색(Traversing)
// .eq() 메서드는 선택한 요소에 인덱스 번호에 해당하는 요소를 찾습니다.
// .filter() 메서드는 선택된 요소에서 선택하거나 함수를 사용할 수 있습니다.
// .first() 메서드는 선택된 요소에서 첫번째 자식 요소를 찾습니다.
// .has() 메서드는 선택된 요소의 자식 요소에서 주어진 선택자를 찾습니다.
// .is() 메서드는 선택된 요소 객체의 특징을 판별합니다.
// .last() 메서드는 선택된 요소에서 마지막 번째 자식 요소를 찾습니다.


let order = 0; // order 변수 값 0으로 설정
const lastorder = $(".juno > div").length - 1; 
// div 박스가 움직이기 위해서는 배열에 맞춘다.
// last 값을 인덱스값과 맞추기 위해 length -1해줘야 함

$(".kapa > button") // 버튼을 클릭시 삭제 추가되는 구현
    .eq(0) // 인덱스 번호 0번 (eq는 선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다.)
    .click(function () {
    if (order === 0) { // 만약 클릭하기 전에 order 값이 0이면 last 값은 동일하니 가만히 있다.
        order = lastorder;
    } else { // 아니라면 order 값은 1씩 감소 시킨다.(그럼 마이너스로 가는 것과 동일하게 박스는 좌로 움직인다.)
        order--;
    }

    $(".juno > div").removeClass("action"); // action 클래스를 remove 삭제 시킨다.
    $(".juno > div").eq(order).addClass("action");  // action 클래스를 선택한 인덱스가 order 값이라면 add 추가 시킨다.
    })

$(".kapa > button")
    .eq(1)
    .click(function () {
    if (order === lastorder) {
        order = 0;
    } else {
        order++;
    }

    $(".juno > div").removeClass("action");
    $(".juno > div").eq(order).addClass("action");
    })
// 좌, 우 버튼을 각각 누르면 박스 위치가 변경되도록 구현