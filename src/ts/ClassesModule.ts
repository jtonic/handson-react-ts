class Product {
  name: string;
  unitPrice: number;

  constructor(name: string, unitPrice: number) {
    this.name = name;
    this.unitPrice = unitPrice;
  }
}

interface IPriceCompute {
  getTotalPrice(discount: number): number;
}

class OrderDetails implements IPriceCompute {
  private readonly _product: Product;
  private readonly _quantity: number;
  // @ts-ignore
  private readonly _dateAdded?: Date;

  constructor(product: Product, quantity: number, dateAdded: Date = new Date()) {
    this._product = product;
    this._quantity = quantity;
    this._dateAdded = dateAdded;
  }

  get product(): Product {
    return this._product;
  }

  getTotalPrice(discount: number): number {
    return this._product.unitPrice * this._quantity * (100 - discount) / 100;
  }
}

export {Product, OrderDetails}
