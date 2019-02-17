
it("This should invoke hello world", () => {
  console.log(jtonic);
  console.log(order1.product, order1.discount(10), order1.quantity);
  expect(jtonic.firstName).toBe("Antonel-Ernest")
  expect(order1.discount(10)).toEqual(810)
});

interface IPerson {
  firstName: string,
  lastName: string,
  age?: number
}

const jtonic: IPerson = {
  firstName: "Antonel-Ernest",
  lastName: "Pazargic"
};

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


