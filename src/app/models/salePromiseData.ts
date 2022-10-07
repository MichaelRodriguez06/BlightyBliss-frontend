import {User} from "./user";
import {Product} from "./product";
import {SalePromise} from "./salePromise";

export class SalePromiseData{
  constructor(
    public user: User,
    public product: Product,
    public salePromise: SalePromise
  ) {
  }
}
