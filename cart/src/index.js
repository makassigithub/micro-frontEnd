import faker from 'faker';

const cartContent = `<div> You have ${faker.datatype.number()} in your cart</div>`

document.querySelector("#dev-cart").innerHTML = cartContent;