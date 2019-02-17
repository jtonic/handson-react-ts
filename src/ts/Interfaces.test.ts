
const productName = "Magic Keyboard 2";

it("interface based person should work properly", () => {
  expect(magicKeyboard2.name).toBe(productName);
  expect(order.getTotalPrice(10)).toBe(81)
});

interface IProduct {
  name: string,
  unitPrice: number,
  age?: number
}

interface IOrderDetails {
  product: IProduct,
  quantity: number
  getTotalPrice(discount: number): number,
}

const magicKeyboard2: IProduct = {
  name: productName,
  unitPrice: 90
};



const order: IOrderDetails = {
  product: magicKeyboard2,
  quantity: 1,
  getTotalPrice(discount: number): number {
    return this.quantity * this.product.unitPrice * (100 - discount) / 100;
  }
};
