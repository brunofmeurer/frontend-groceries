import { UnityOfMeasurement } from "./UnityOfMeasurement";
/**
 * @author Bruno Meurer
 * @description Model of grocerie
 */
export class Grocerie {
    name: string;
    unitOfMeasurement: UnityOfMeasurement;
    quantity: number;
    price: number;
    spoils: boolean;
    expirationDate: Date;
    dateFactory: Date;
    index: number;
    constructor() { 
        this.name = ''
        this.unitOfMeasurement = null
        this.quantity = 0
        this.price = 0
        this.spoils = false
        this.expirationDate = null
        this.dateFactory = null
        this.index = null
    }
}