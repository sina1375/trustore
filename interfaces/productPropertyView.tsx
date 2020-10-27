import { ProductProperyValueView } from "./productProperyValueView";

export interface ProductProperyView {
    id: number,
    title: string,
    type: number,
    values: ProductProperyValueView[],
}