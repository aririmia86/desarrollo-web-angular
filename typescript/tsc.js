var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hola, ' + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("soy el mensaje");
console.log(gree.greet());
var _this = this;
console.log("Hola Mundo");
var full_name = "Alejandro Irimia";
var age = 31;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [1, 2, 3, 4, 5, 6];
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
var data = ['AngularJS', 'Angular', 'Redux', 'Polymer', 'ReactJS', 'VueJS'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
var personaUno = {
    first_name: 'Alejandro',
    last_name: 'Irimia',
    twitter_account: '@aririmia86'
};
var personaDos = {
    first_name: 'Jorge',
    last_name: 'Cano'
};
console.log(personaUno);
console.log(personaDos);
var MyPerson = (function () {
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '(⌐■_■)';
        return "Saludos:\n\t\t    " + this.first_name + " " + this.last_name + ",\n\t\t    te enviamos un emojis de la consola\n\t\t" + emojis;
    };
    return MyPerson;
}());
var personaTres = new MyPerson("Alejandro", "Irimia");
console.log(personaTres.getSaludo());
var Person = (function () {
    function Person() {
        this.first_name = "Alejandro";
        this.last_name = "Irimia";
        this.twitter_user = "@aririmia86";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName("Irimia");
myPerson.first_name = "Alejandro";
console.log(myPerson);
//# sourceMappingURL=tsc.js.map