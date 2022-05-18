import Cart from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('return 0 when the method getTotal() is called in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price, and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes',
        price: 14990,
      },
      quantity: 4, // 59.960
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(59960);
  });
});
