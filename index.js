// 보이는 학생
function sol() {
  let arr = [130, 135, 148, 140, 145, 150, 150, 153]; // 입력 값
  let max = arr[0]; // 최대값 입력하도록 배열 변수 저장
  let cnt = 1; // 카운트 1씩 증가값 변수 저장

  for (let i = 1; i < arr.length; i++) {
    // 입력 값 만큼 반복
    if (max < arr[i]) {
      // 배열값이 최대값보다 큰 값을 확인
      console.log(arr[i]); // 조건에 해당하는 값 확인
      max = arr[i]; // 최대값에 해당 값 저장
      cnt++; // 조건 부합된 값을 증가
    }
  }
  return cnt;
}

console.log(sol()); // 5
