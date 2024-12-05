async function call() {
    var nome = document.getElementById('nome').value;
    await post(nome);

    var body = document.body

   body.style.background = nome
}

function post(nome) {
    fetch("http://localhost:8000/user", {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'  
        },
        body: JSON.stringify({ name: nome })  
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}



function get(nome){

    const name = new URLSearchParams({
        name:nome
    });

    fetch(`http://localhost:8000/user${name.toString()}`, {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok){
            throw new Error(`Network response was not ok`);
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(`There was a problem with the fetch operation`)
    });
}

color = async  () => {

    fetch()
}

// async function post(x){

//     const url = "http://localhost:8000/user"

//     console.log(x)

//     const response = await fetch(url, {mode:"no-cors",
//         body: JSON.stringify({username: "example"})
//     })
// }
