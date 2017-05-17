console.log("Hola mundo");

//Primitivas
var full_name:string = "Alejandro Irimia";
var age:number = 27;
var developer:boolean = true;

//Arrays
var skills:Array<string> = ['Javascript', 'Typescript', 'Angular'];
var numberArray:number[] = [123,123,412,45];

enum Role {Employee, Manager, Admin, Developer};
var role:Role = Role.Employee;

console.log("roles", role);

function setName(name:string):void {
  this.full_name = name;
}

function getHello(pretext:string):string {
  //return pretext + " " + this.full_name;
}