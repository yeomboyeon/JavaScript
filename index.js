// ajax 활용
// 서버 주소 : https://pokeapi.co/api/v2/pokemon?limit=limit&offset=18
/**
 * 1. 데이터 가져오기? jquery agax
 * 2. 어디서 가져오지? document ready
 * 3. 데이터 보여줄 화면 선택자로 가져오기 html
 * 4. 데이터를 배열로 가져와 반복문으로 돌리고 html을 만드기
 * 5. 가져온 데이터 맨 아래에 출력하기 append(html)
 */
 
$(document).ready(function(){

    $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon?limit=limit&offset=18",
        success:function(response){

            let html = '';

            console.log(response);

            const pokemonList = response.results; // F12 검사할 때 가져와야 할 데이터(배열)가 담긴 태그명(results)
            
            for(let i = 0; i < pokemonList.length; i++){ // 데이터를 반복해서 가져오기

                const pokemon = pokemonList[i]; // 가져온 데이터를 변수에 저장하기

                html += '<div class="card card-number-0 grass">';
                html += `<div><p>#${i+1}</p><h3 class="white name">${pokemon.name}</h3></div>`;
                html += `<div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png"></div>`;
                html += '</div>';
            }
            $('#list').append(html); // 저장한 html 파일을 맨 아래로 출력하기
        },
    });
})