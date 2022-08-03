// 문제 : 1, 2, 3을 10번 출력해주세요.
// 조건 : while문 사용
// 출력예시
/*
1
2
3
1
2
3
...
1
2
3
*/
console.clear();

var i = 1;

while (i <= 10) { /*2중 반복문 활용*/
    
    var j = 1;
    
    while (j <= 3) {
        console.log(j);
        j++;
    }
     i++;
}
