// 문제 : 매개변수와 인자에 따라 출력값 변경

console.clear();

function printN(start, limit){ /*매개변수*/
    console.log("== " + "printN : " +  start +"~"+limit + " ==")
    for(let i = start; i <= limit; i++){
        console.log(i);       
    }    
}

// printN(15); 인자(여기 숫자만큼 출력)(상단에 start만 삭제하면 인자 1개로 활용)
printN(3, 7); // 3~7