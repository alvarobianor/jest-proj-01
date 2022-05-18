export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((old, item) => {
      return old + item.product.price * item.quantity;
    }, 0);
  }

  add(item) {
    this.items.push(item);
  }
}
