
const productName = "Magic Keyboard 2";

it("interface based person should work properly", () => {
  expect(magicKeyboard2.name).toBe(productName);
  expect(order2.getTotalPrice(10)).toBe(81);
  expect(order2.dateAdd).toBeUndefined();
  expect(order3.getTotalPrice()).toBe(180);
  expect(order3.getTotalPrice(10)).toBe(162);

  const currentDate = Date();
  expect(order3.dateAdd || currentDate).toBe(currentDate);
});

interface IProduct {
  name: string,
  unitPrice: number,
  age?: number
}

interface IOrderDetails {
  product: IProduct,
  quantity: number,
  dateAdd?: Date,
  getTotalPrice(discount?: number): number,
}

const magicKeyboard2: IProduct = {
  name: productName,
  unitPrice: 90
};

const order2: IOrderDetails = {
  product: magicKeyboard2,
  quantity: 1,
  getTotalPrice(discount: number): number {
    return this.quantity * this.product.unitPrice * (100 - discount) / 100;
  }
};

const order3: IOrderDetails = {
  product: magicKeyboard2,
  quantity: 2,
  getTotalPrice(discount?: number): number {
    return this.product.unitPrice * this.quantity * (100 - (discount || 0)) / 100;
  }
}
