var MyPerson = (function () {
    //El ? indica que es un parametro opcional, el _ es para que el compilador sepa que son variables diferentes
    function MyPerson(_first_name, _last_name) {
        console.log(_first_name, _last_name);
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson("Alejandro");
var personaTres = new MyPerson("Alejandro", "Irimia");
