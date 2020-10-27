export interface ProductsFromBody {
    categoryKinds: number[],
    startPrice?: number,
    endPrice?: number,
    brands: number[],
    propertyItemValues: number[],
    pageNo: number,
    categoryID?: number,
    groupID?: number,
    parent?: number,
}