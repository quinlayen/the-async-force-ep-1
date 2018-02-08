console.log('sanity check');

function request(method, url, callback) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    return callback.bind(this)(data);
  });
  oReq.open(method, url);
  oReq.send();
  return oReq;
}

const getUrl = (category, categoryId) =>
  `https://swapi.co/api/${category}/${categoryId}`;

const modulePerson4 = () => {
  request('GET', getUrl('people', '4'), data => {
    const person4Name = data.name;
    document.getElementById('person4Name').innerHTML = person4Name;

    request('GET', getUrl('planets', '4'), data => {
      const person4Homeworld = data.name;
      document.getElementById('person4HomeWorld').innerHTML = person4Homeworld;
    });
  });
};
modulePerson4();

const modulePerson14 = () => {
  request('GET', getUrl('people', '14'), data => {
    const name = data.name;
    document.getElementById('person14Name').innerHTML = name;

    request('GET', getUrl('species', '14'), data => {
      const person14Species = data.name;
      document.getElementById('person14Species').innerHTML = person14Species;
    });
  });
};
modulePerson14();

const filmListModule = () => {
  //array to hold planet lists

  //list out the titles of the movies
  request('GET', getUrl('films', ''), data => {
    const filmList = document.getElementById('filmList');

    const mappedList = data.results.map(element => {
      let film = document.createElement('li');
      film.innerHTML = element.title;
      filmList.appendChild(film);
      const planetArray = element.planets;
      const mappedPlanets = element.planets.map(url => {
        //list the planets that were in the movie

        request('GET', url, data => {
          const planetList = document.createElement('ul');
          const planet = document.createElement('li');
          planet.innerHTML = data.name;
          film.appendChild(planetList);
          planetList.appendChild(planet);
        });
      }); //mappedPlanets close
      return element;
    }); //mappedList close
  });
};
filmListModule();
