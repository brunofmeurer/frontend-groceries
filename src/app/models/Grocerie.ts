import { UnityOfMeasurement } from "./UnityOfMeasurement";

export class Grocerie {
    constructor() { }
    name: string;
    unitOfMeasurement: UnityOfMeasurement;
    quantity: number;
    price: number;
    spoils: boolean;
    expirationDate: Date;
    dateFactory: Date;
    index: number;
}