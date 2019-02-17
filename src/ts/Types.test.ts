
it("This should invoke hello world", () => {
  expect(order1.discount(10)).toEqual(810)
});

type Product = {
  name: string;
  brand: string;
  price: number;
};

type ComputeDiscount = (discount: number) => number;

type OrderDetails = {
  product: Product;
  quantity: number;
  discount: ComputeDiscount;
};

const keyboard: Product = {
  name: "Gaming keyboard",
  brand: "Microsoft",
  price: 90,
};

const order1: OrderDetails = {
  product: keyboard,
  quantity: 10,
  discount(discount: number): number {
    return this.product.price * this.quantity * (100 - discount) / 100
  }
};


