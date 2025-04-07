import { Product } from "./models/Product.js";
import { Customer } from "./models/Customer.js";
import { Order } from "./models/Order.js";
const product1 = new Product("Laptop", 1000, "Electronics");
const product2 = new Product("Mouse", 50, "Accessories");
const customer = new Customer("John Doe");
const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
customer.addOrder(order);
console.log(customer.getUserInfo());
console.log(customer.viewOrders());
export class Product {
 constructor(name, price, category) {
 this.name = name;
 this.price = price;
 this.category = category;
 }
}
export class User {
 constructor(name) {
 this.name = name;
 }
 getUserInfo() {
 return `User: ${this.name}`;
 }
}
import { User } from "./User.js";
import { Order } from "./Order.js";
export class Customer extends User {
 constructor(name) {
 super(name);
 this.orders = [];
 }
 addOrder(order) {
 if (order instanceof Order) {
 this.orders.push(order);
 console.log(`Order added for ${this.name}`);
 } else {
 console.log("Invalid order");
 }
 }
 viewOrders() {
 return this.orders
 .map((order, index) => `Order ${index + 1}: ${order.getTotal()}`)
 .join("\n");
 }
}
export class Order {
 constructor() {
 this.products = [];
 }
 addProduct(product) {
 this.products.push(product);
 }
 getTotal() {
 return this.products.reduce((total, product) => total + product.price, 0);
 }
}
