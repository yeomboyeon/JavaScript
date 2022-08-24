// ajax 활용
// 서버 주소 : https://pokeapi.co/api/v2/pokemon?limit=limit&offset=18
// 1. 데이터 가져오기 jquery ajax
// 2. 어디서 가져오지? document.ready
// 3. 데이터 보여줄 화면을 선택자로 가져오기
// 4. 배열로 있는 데이터를 가져와 반복문으로 html을 만든다.
// 5. append(html) 맨 아래 입력

$(document).ready(function () {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon?limit=limit&offset=18`,
    success: function (response) {
      const pokemonList = response.results;

      let html = "";

      for (let i = 0; i < pokemonList.length; i++) {
        console.log(i);

        const pokemon = pokemonList[i];

        html += '<div class="card card-number-0 grass">';
        html += `<div><p>#${i + 1}</p><h3 class="white name">${
          pokemon.name
        }</h3></div>`;
        html += `<div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          i + 1
        }.png"></div>`;
        html += "</div>";
      }
      $("#list").append(html);
    },
  });
});
