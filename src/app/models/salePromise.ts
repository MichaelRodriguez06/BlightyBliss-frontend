export interface SalePromise{
  id?: number,
  userSellerId: number,
  userBuyerId: number,
  productId: number
  date: Date,
  statusSale?: string,
  saleQuantity: number,
  pricePerUnit: number,
  total: number
}
