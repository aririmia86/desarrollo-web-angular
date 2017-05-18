class MyPerson {
	first_name:string;
	last_name:string;

    //El ? indica que es un parametro opcional, el _ es para que el compilador sepa que son variables diferentes
	constructor(_first_name?:string, _last_name?:string){
		console.log(_first_name, _last_name);
		this.first_name = _first_name;
		this.last_name = _last_name;
	}

	getSaludo():string{
		let emojis = '(⌐■_■)';
		return `Saludos:
		    ${this.first_name} ${this.last_name},
		    te enviamos un emojis de la consola
		` + emojis;
	}
}

let personaTres = new MyPerson("Alejandro","Irimia");
console.log(personaTres.getSaludo());