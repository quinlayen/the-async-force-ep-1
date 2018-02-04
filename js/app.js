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