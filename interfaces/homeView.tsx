import { CategoryView } from "./categoryView";
import { ProductView } from "./productView";

export interface HomeView {
    categories: CategoryView[],
    newstProducts: ProductView[],
    mostVisitsProducts: ProductView[],

    firstSlidePath: string,
    firstSlideGroupID: string,

    secondSlidePath: string,
    secondSlideGroupID: string,

    thirdSlidePath: string,
    thirdSlideGroupID: string,
}