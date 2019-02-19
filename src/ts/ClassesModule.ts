class Product {
  constructor(public name: string, public unitPrice: number) {
    this.name = name;
    this.unitPrice = unitPrice;
  }
}

interface IPriceCompute {

  getTotalPrice(discount: number): number;
}

class OrderDetails implements IPriceCompute {

  constructor(public product: Product, public quantity: number, public dateAdded: Date = new Date()) {
    this.product = product;
    this.quantity = quantity;
    this.dateAdded = dateAdded;
  }

  getTotalPrice(discount: number): number {
    return this.product.unitPrice * this.quantity * (100 - discount) / 100;
  }
}

export {Product, OrderDetails}
