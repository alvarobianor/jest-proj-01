import { find, findIndex, remove } from 'lodash';

export default class Cart {
  items = [];

  getTotal() {
    return this.items.reduce((old, item) => {
      return old + item.product.price * item.quantity;
    }, 0);
  }

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  add2(item) {
    const itemToFind = { product: item.product };
    const indexItem = findIndex(this.items, itemToFind);
    if (indexItem > -1) {
      this.items[indexItem].quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  remove(product) {
    remove(this.items, { product });
  }

  checkout() {
    return {
      total: this.getTotal(),
      items: this.items,
    };
  }
}
