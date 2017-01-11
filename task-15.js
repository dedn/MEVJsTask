var Car = function (model) {
    this.model = model;
    this.test = 5;
};

Car.prototype.asd = "test";
var BigCar = function (model, skills) {
    Car.call(this, model);
    this.skills = skills;
};

BigCar.prototype = Object.create(Car.prototype);
BigCar.prototype.constructor = BigCar;

var bigCar = new Car('Kamaz', 'value1');
console.log(bigCar.model);
console.log(bigCar.skills);
console.log(bigCar.test);
console.log(bigCar.asd);

var RacingСar = function (model, speed) {
    Car.call(this, model);
    this.speed = speed;
};

RacingСar.prototype = Object.create(Car.prototype);
RacingСar.prototype.constructor = RacingСar;

var racingСar = new RacingСar('Formula-One', '350');
console.log(racingСar.model);
console.log(racingСar.speed);
console.log(bigCar.asd);    