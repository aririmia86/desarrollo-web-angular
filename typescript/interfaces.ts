interface MyPersona{
	first_name:string;
	last_name:string;
	twitter_account?:string;
}

let personaUno:MyPersona = {
	first_name:'Alejandro',
	last_name:'Irimia',
	twitter_account:'@aririmia86'
}

let personaDos:MyPersona = {
	first_name:'Jorge',
	last_name:'Cano'
}

console.log(personaUno);
console.log(personaDos);