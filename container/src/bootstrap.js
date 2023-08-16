import { mount as mountProductList } from 'federatedProducts/ProductsIndex';
import { mount as mountCart } from 'federatedCart/CartIndex';
console.log(mountCart);

console.log('container');

mountProductList(document.querySelector('#my-products'));
mountCart(document.querySelector('#my-cart'));