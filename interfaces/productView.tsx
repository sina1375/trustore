import { ProductProperyView } from "./productPropertyView";

export interface ProductView {
    id: number,
    fullTitle: string,
    rate: number,
    ratedUsersCount: number,
    price: number,
    orginalPrice: number,
    thumbnailImagePath: string,
    imagePaths: string[],
    mainProperties: ProductProperyView[],
    selectableProperties: ProductProperyView[],

    category: string,
    categoryID: number,
    categoryKind: string,
    categoryKindID: number,
    parent: string,
    parentID?: number,
}