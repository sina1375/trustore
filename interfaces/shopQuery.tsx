export interface ShopQuery {
    categoryKinds: number[],
    startPrice?: number,
    endPrice?: number,
    brands: number[],
    productProperies: number[],
    pageNo: number,
    parent?: number,
    category?: number,
    group?: number,
}