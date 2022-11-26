function getData(){
fetch('https://api.themoviedb.org/3/movie/popular?api_key=f61fb2093ee174ea2a2a9c298a3c6a3c&language=pt-BR&page=1')
.then((films) =>{
  return films.json()
  }).then((data) => {
    return results(data.results);
  });
}

function results(list) {
  const titleResult= document.getElementById('title-result');
  const overviewResult = document.getElementById('overview-result'); 
  const imgFilm = document.getElementById('img-film');

  const results = list;

  const numberRandom = Math.floor(Math.random() * results.length);
  const imgID = list[numberRandom].poster_path;
  const img = `https://image.tmdb.org/t/p/w500/${imgID}`


  titleResult.innerText = list[numberRandom].original_title
  overviewResult.innerText = list[numberRandom].overview;
  imgFilm.setAttribute('src', img) ;
  console.log(list
    )
}

const btn = document.getElementById('btn');
btn.addEventListener('click', getData)
