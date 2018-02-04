console.log('sanity check')



function modulePerson4(){
const oReq = new XMLHttpRequest();

function reqListener(){
    const data = JSON.parse(this.responseText);
    const person4Name = data.name;
    document.getElementById('person4Name').innerHTML = person4Name;

    const oReq2 = new XMLHttpRequest();

        function reqListener2(){
            const data2 = JSON.parse(this.responseText);
            const person4Homeworld = data2.name;
            document.getElementById('person4HomeWorld').innerHTML = person4Homeworld;
            
        };

        oReq2.addEventListener('load', reqListener2)
        oReq2.open('GET', "https://swapi.co/api/planets/1/")
        oReq2.send();
};

oReq.addEventListener('load', reqListener);
oReq.open('GET', "https://swapi.co/api/people/4/");
oReq.send();
};

modulePerson4();





function modulePerson14(){

const oReq = new XMLHttpRequest();

function reqListener(){
    const data = JSON.parse(this.responseText);
    const name = data.name;
    document.getElementById('person14Name').innerHTML = name;
    
    const oReq2 = new XMLHttpRequest();

        function reqListener2(){
        const data2 = JSON.parse(this.responseText);
        const person14Species = data2.name;
        document.getElementById('person14Species').innerHTML = person14Species;
        };

        oReq2.addEventListener('load', reqListener2);
        oReq2.open('GET', "https://swapi.co/api/species/1/");
        oReq2.send();
};

oReq.addEventListener('load', reqListener);
oReq.open('GET','https://swapi.co/api/people/14/');
oReq.send();



};
modulePerson14();





function filmListModule(){


    //array to hold planet lists

    
    const oReq = new XMLHttpRequest();
    //list out the titles of the movies
    function reqListener(){
        const data = JSON.parse(this.response);
        const filmList = document.getElementById('filmList');
        const mappedList = data.results.map(function(element){
        let film = document.createElement('li');
        film.innerHTML=element.title
        filmList.appendChild(film);
        const planetArray = element.planets;
        createRequest()

    //list the planets that were in the movie
        function createRequest(){
        const oReq2 = new XMLHttpRequest();
            
            function reqListener2(){
                const data2 = JSON.parse(this.response);
                const planetList = document.createElement('ul');
                const planet = document.createElement('li');
                planet.innerHTML=data2.name;
                film.appendChild(planetList);
                planetList.appendChild(planet);
        
            };
        
            
            oReq2.addEventListener('load', reqListener2);
            oReq2.open('GET', element.planets[0])
            oReq2.send();
                }

        });//mappedList close
        
    };

    oReq.addEventListener('load',reqListener);
    oReq.open('GET', 'https://swapi.co/api/films/');
    oReq.send();

};
filmListModule();