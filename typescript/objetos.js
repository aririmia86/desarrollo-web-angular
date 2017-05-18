var MyPerson = (function () {
    //El ? indica que es un parametro opcional, el _ es para que el compilador sepa que son variables diferentes
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
