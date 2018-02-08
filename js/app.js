console.log('sanity check');

function request(method, url, callback) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', callback);
  oReq.open(method, url);
  oReq.send();
}

const getUrl = (category, categoryId) =>
  `https://swapi.co/api/${category}/${categoryId}`;

function modulePerson4() {
  request('GET', getUrl('people', '4'), function() {
    const data = JSON.parse(this.responseText);
    const person4Name = data.name;
    document.getElementById('person4Name').innerHTML = person4Name;

    request('GET', getUrl('planets', '4'), function() {
      const data2 = JSON.parse(this.responseText);
      const person4Homeworld = data2.name;
      document.getElementById('person4HomeWorld').innerHTML = person4Homeworld;
    });
  });
}
modulePerson4();

function modulePerson14() {
  request('GET', getUrl('people', '14'), function() {
    const data = JSON.parse(this.responseText);
    const name = data.name;
    document.getElementById('person14Name').innerHTML = name;

    request('GET', getUrl('species', '14'), function() {
      const data2 = JSON.parse(this.responseText);
      const person14Species = data2.name;
      document.getElementById('person14Species').innerHTML = person14Species;
    });
  });
}
modulePerson14();

function filmListModule() {
  //array to hold planet lists

  
  //list out the titles of the movies
  request('GET', getUrl('films'), function() {
    const data = JSON.parse(this.response);
    const filmList = document.getElementById('filmList');
    const mappedList = data.results.map(function(element) {
      let film = document.createElement('li');
      film.innerHTML = element.title;
      filmList.appendChild(film);
      const planetArray = element.planets;
      const mappedPlanets = element.planets.map(function(items) {
        createRequest();

        //list the planets that were in the movie
        function createRequest() {
          const oReq2 = new XMLHttpRequest();

          function reqListener2() {
            const data2 = JSON.parse(this.response);
            const planetList = document.createElement('ul');
            const planet = document.createElement('li');
            planet.innerHTML = data2.name;
            film.appendChild(planetList);
            planetList.appendChild(planet);
          }

          oReq2.addEventListener('load', reqListener2);
          oReq2.open('GET', items);
          oReq2.send();
        }
        return items;
      }); //mappedPlanets close
      return element;
    }); //mappedList close
  }

  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'https://swapi.co/api/films/');
  oReq.send();
}
filmListModule();
