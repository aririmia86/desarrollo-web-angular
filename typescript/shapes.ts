class Person {
		
	first_name:string;
	last_name:string;
	twitter_user:string;

	constructor(){
		this.first_name = "Alejandro";
		this.last_name = "Irimia";
		this.twitter_user = "@aririmia86"
	}

	setLastName(last_name:string){
		this.last_name = last_name;
	}
}

var myPerson = new Person();
myPerson.setLastName("Irimia");
myPerson.first_name = "Alejandro";
console.log(myPerson);