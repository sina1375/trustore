import { BrandView } from "./brandView";
import { CategoryKindView } from "./categoryKindView";
import { ProductProperyView } from "./productPropertyView";
import { ProductView } from "./productView";

export interface ShopView {
    products: ProductView[]
    categoryKind: CategoryKindView,
    brands: BrandView[],
    productProperties: ProductProperyView[],
    pagesCount: number,
}