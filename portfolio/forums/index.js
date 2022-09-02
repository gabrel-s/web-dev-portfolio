/*
let input_name = document.querySelector(#input_name);
let input_title = document.querySelector(#input_title);
let input_text = document.querySelector(#input_text);
//let input_file = document.querySelector(#input_file);

let table_name = input_name;
let table_title = input_title;
let table_text = input_text;
//let table_file = input_file;*/

let table_model = document.querySelector("#table_model");
function func_read(){
    fs.readFile('./diss.json', (err, data) =>{
	if(err){
	    console.log('Erro!');
	    return;
	}
	console.log(data);
    });
}
