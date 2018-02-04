console.log('sanity check')


const oReq = new XMLHttpRequest();


function reqListener(){
    const data = JSON.parse(this.responseText);
    const person4Name = data.name;
    document.getElementById('person4Name').innerHTML = person4Name;
    const oReq2 = new XMLHttpRequest();

        function reqListener2(){
            const data2 = JSON.parse(this.responseText);
            console.log(this.responseText)
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