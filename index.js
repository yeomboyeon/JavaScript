/** 게시판 자료를 ajax를 사용하여 가져오기
 * 
 * =====1단계 (구현 완료)
 * 1. 데이터를 어디서 가져올지 확인
 * 2. document 요청 데이터 가져오기
 * 3. 데이터를 보여줄 화면을 선택자로 가져오기
 * 4. 00개의 데이터를 반복문을 통해서 html로 만들기
 * 5. 만든걸 배열로 저장
 * 6. append(html) 맨 아래로 보여주기
 * 
 * ======2단계 (구현 전)
 * 7. 데이터를 불러오는 중간에 로딩화면 구현
 */

$('document').ready(function(){
    // 한번 실행시켜주기 때문에 아래의 태그들은 한번만 실행하면 되는 것들을 추가
    let html = '<table>'; 
        html += '<thead>';
        html += '<th>번호</th>';
        html += '<th>글제목</th>';
        html += '<th>내용</th>';
        html += '</thead>';
        html += '<tbody>';

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        async : false, // 비동기를 동기로 바꿔서 실행
        success: function(response){
            // console.log(response);

            // 게시판에 데이터가 100개가 있는데 이거는 반복문을 통해서 추가를 하고 그들을 감싸는 태그도 반복되어 추가되도록 여기에 추가
            for(let i = 0; i < response.length; i++){ // 불러오는 주소(response)에 있는 데이터만큼(.length) 반복
                
                const data = response[i]; // 데이터를 불러오는 주소의 데이터만큼 배열로 저장(response[i])
                
                // 아래의 태그들은 반복해서 실행해야만 계속 추가되어 출력됨
                // 100개의 데이터를 선택자(${})로 불러오기 
                // id, title, userId 변수명은 url 주소에서 검사했을 때 
                // 데이터 구성 확인해보면 불러와야 하는 태그명들을 작성하였음.
                html += '<tr>';
                html += `<td>${data.id}</td>`; 
                html += `<td>${data.title}</td>`;
                html += `<td>${data.userId}</td>`;
                html += '</tr>';
            }
        },
        error: function (request, status, error){        
        }
    });
    // 반복문 아래 닫아줘야 하는 태그들 추가
    html += '</tbody>';

    html += '</table>';

    // 출력되어야 하는 위치에 있는 선택자($()) 아래(append)에 불러오는 html을 넣어주기
    $('.container').append(html);

})