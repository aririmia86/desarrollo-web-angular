var _this = this;
console.log("Hola Mundo");
//Primitivas
// Tipos de variable en minuscula
var full_name = "Alejandro Irimia";
var age = 31;
var developer = true;
//Arrays
// Tipos de array en mayuscula
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [1, 2, 3, 4, 5, 6];
//Enumeradores
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
;
var role = Role.Employee;
var something = "Ahora soy un string";
console.log("Roles", role);
//Functions
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('Hola Platzi mi nombre es'));
inConsole("en realidad recibo cualquier formato a lo js");
//ForEach
var data = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
