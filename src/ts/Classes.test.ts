import * as Orders from './ClassesModule';

it("Test the usage of Typescript classes", () => {

  const magicKeyboardName = "Magic Keyboard 2";
  const magicKeyboard = new Orders.Product(magicKeyboardName, 100);
  const order1 = new Orders.OrderDetails(magicKeyboard, 2);

  expect(magicKeyboardName).toBe(order1.product.name);
  expect(magicKeyboardName).toBe(magicKeyboard.name);
  expect(180).toBe(order1.getTotalPrice(10));
});
