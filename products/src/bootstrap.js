import faker from 'faker';



const mount = el => {
    let products = '';

    for(let i=0; i<10; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}
/*
 Situation 1:
    We are running this file in development in isolation &&
    We are using our local index.html file && 
    We have an element with id of dev-products &&
    We want to immediately render our app into that element
*/

if(process.env.NODE_ENV === 'development'){
    // Assuming the container has an element with id dev-products
  const el =   document.querySelector('#dev-products');
    if(el){ 
        // We are probably running in isolation
        mount(el);
    }
}

/*
 Situation 1:
    We are running this file in development or production through the conatainer app &&
    There is no guarantee that there is an element with id dev-products && 
    We don't want to immediately render our app into that element
*/
export  { mount };