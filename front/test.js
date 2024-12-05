fetch('http://localhost:3000/api', {
    method: 'POST',  // Usando POST em vez de GET
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'John',
      age: 30
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

  app.use(express.json());  // Middleware para entender requisições com JSON no corpo

app.post('/api', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello ${name}, Age: ${age}` });
});



// -------------------------------------


// Criando uma string de parâmetros
const params = new URLSearchParams({
    name: 'John',
    age: '30'
  });
  
  // Usando fetch com método GET
  fetch(`http://localhost:3000/api?${params.toString()}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

  app.get('/api', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.json({ message: `Hello ${name}, Age: ${age}` });
  });
  