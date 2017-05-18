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
