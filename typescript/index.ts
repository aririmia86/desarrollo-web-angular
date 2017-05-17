console.log("Hola Mundo");

//Primitivas
// Tipos de variable en minuscula
var full_name:string = "Alejandro Irimia";
var age:number = 31;
var developer:boolean = true;

//Arrays
// Tipos de array en mayuscula
var skills:Array<string> = ['JavaScript','TypeScript','Angular'];
var numberArray:number[] = [1,2,3,4,5,6];

//Enumeradores
enum Role {Employee, Manager, Admin, Developer};
var role:Role = Role.Employee;
var something:any = "Ahora soy un string";


console.log("Roles", role);

//Functions
function setName(name:string):void{
    this.full_name = name;
}

function getHello(pretext:string):string{
    return pretext + " " + this.full_name;
}

function inConsole(nameFunction:any):void{
    console.log(nameFunction);
}

inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");

//ForEach
var data: string[] = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach((frameworksLibs)=>{
    this.inConsole(frameworksLibs);
});