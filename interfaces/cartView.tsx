import { ProductView } from "./productView";

export interface CartView{
     productID :number,
     count :number,
     productView :ProductView,
     selectablePropertyValuesIDs :number[],
}