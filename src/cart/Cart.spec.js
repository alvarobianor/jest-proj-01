import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product;
  let product2;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: 'Adidas running shoes',
      price: 14990,
    };

    product2 = {
      title: 'moletom Air Jodan',
      price: 32990,
    };
  });

  describe('getTotal()', () => {
    it('return 0 when the method getTotal() is called in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price, and receive the total amount', () => {
      cart.add({
        product,
        quantity: 4, // 59.960
      });

      expect(cart.getTotal()).toEqual(59960);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 1,
      });

      cart.add({
        product,
        quantity: 4, // 59.960
      });

      expect(cart.getTotal()).toEqual(59960);
    });

    it('should update the quantity of a product that exists on cart when added the same product', () => {
      cart.add2({
        product,
        quantity: 2,
      });

      cart.add2({
        product,
        quantity: 4, // 59.960
      });

      expect(cart.getTotal()).toEqual(89940);
    });

    it('should update the total when a product gets include or removed', () => {
      cart.add({
        product,
        quantity: 2, //29.980
      });

      cart.add({
        product: product2,
        quantity: 4, // 131.960
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(131960);
    });
  });

  describe('checkout', () => {
    it('should return an object with the total and the list of itens of cart', () => {
      cart.add({
        product,
        quantity: 54,
      });

      cart.add({
        product: product2,
        quantity: 48,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should reset the cart when the checkout method is called', () => {
      cart.add({
        product: product2,
        quantity: 48,
      });

      cart.checkout();

      expect(cart.getTotal()).toEqual(0);
    });
  });

  it('should return an object with the total and the list of itens of cart, when the summary is called', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product: product2,
      quantity: 4,
    });

    expect(cart.summary()).toMatchSnapshot();
    expect(cart.getTotal()).toBeGreaterThan(0);
  });
});
