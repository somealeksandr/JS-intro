var search = document.querySelector('.search')
var go = document.querySelector('.go');
var search = search.value;
var result = document.querySelector('.result');

document.querySelector('.go').addEventListener('click',load);

function load() {
    let url =   `http://www.omdbapi.com/?i=tt3896198&apikey=19a48f87=${search}`;
    var req = new Request(link);

    fetch(req)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(link)
    })
}

    


   


