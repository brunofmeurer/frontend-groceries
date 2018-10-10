import { UnityOfMeasurement } from "./UnityOfMeasurement";

export class ItemBreadcrumb {
    name: string;
    unitOfMeasurement: UnityOfMeasurement;
    quantity: number;
    price: number;
    spoils: boolean;
    dateValidate: Date;
    dateFactory: Date;
}