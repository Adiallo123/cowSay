const userInformation = require('./uerInformation');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hello i'am ${userInformation.person.name}, from ${userInformation.person.campus} campus!`,
    e: "oO",
    T: "U "
}));
