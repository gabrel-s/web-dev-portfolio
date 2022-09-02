import express from 'express';
import { StatusCodes } from 'http-status-codes';
const app = express();
const PORT = 3000;

// INICIO --
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let bttn = document.querySelector("submit");

let names = [];
function array_name(fname, lname){
    names.push(fname, lname);
}
bttn.addEventListener("click", array_name);
// FIM --
let users = [
    {id:1, name:'Vladimir Bananas', age:21},
    {id:2, name:'Gabriel Carlos Nogueira', age:47}
];

app.use(express.json());

//func_callback
//Quando der o .listen na PORT, execute a funÃ§Ã£o
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Escrevendo no arquivo HTML
app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor <strong>EXPRESS</strong>...</h1>');
});

//GET
//RECUPERAÇÃO DE RECURSOS (TOTAL)
app.get('/users', (request, response) => {
    return response.send(users);
});

//RECUPERAÇÃO DE RECURSO (ESPECÍFICO)
app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
	    return (user.id === Number(userId))
    })
    return response.send(user);
});

app.get('/array_name'. (request, response) => {
    return response.send(names);
});
app.get('/array_name/:nameId', (request, response) => {
    const nameId = request.params.nameId;
    const name = names.find(name => {
	return (name.id === Number(nameId))
    })
    return response.send(name);
});

//POST
//ADICIONA UM NOVO RECURSO
app.post('/users', (request, response) => {
    const newUser = request.body;
    
    users.push(newUser);
    
    return response.status(StatusCodes.CREATED).send(newUser);
});
