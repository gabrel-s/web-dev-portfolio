const label_TableHeader = document.getElementById("tableHeader");
const input_TableName = document.getElementById("tableName");
const input_Submit = document.getElementById("buttonSubmit");
const block_table = document.getElementById("table");

input_Submit.addEventListener('click', function(){
    if(input_TableName.value == ''){
	alert('CAMPO OBRIGATÓRIO');
    }else{
	if (input_TableName.innerText !== ''){
	    alert(`trabalhando com a tabela ${tname}`);
	};
    }
});

// const botaoAdicionar = document.createElement('button');
// botaoAdicionar.innerText = 'SUBMIT';
// botaoAdicionar.id = 'mainButton';


// document.body.appendChild(button);
// botaoAdicionar.addEventListener('click', function(){
//     const tableName = forms.value;
//     forms.value = '';
//     tableHeader.innerText(forms.value);
// });
// botaoAdicionar.addEventListener('click', function(){
//     alert('something happened');
// });
// document.body.appendChild(botaoAdicionar);
