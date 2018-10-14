import { TestBed, inject, async } from '@angular/core/testing';

import { GroceriesService } from './groceries.service';
import { Grocerie } from '../models/Grocerie';
import { UnityOfMeasurement } from '../models/UnityOfMeasurement';

describe('GroceriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceriesService = TestBed.get(GroceriesService);
    expect(service).toBeTruthy();
  });

  it('create grocerie', inject([GroceriesService], (service: GroceriesService) => {
    service.clean()
    let grocerie = new Grocerie()
    grocerie.name = "Item 1"
    grocerie.unitOfMeasurement = UnityOfMeasurement.KG
    grocerie.quantity = 50
    grocerie.price = 50
    grocerie.spoils = true
    grocerie.expirationDate = new Date()
    grocerie.dateFactory = new Date()
    service.add(grocerie)
    expect(service.get().length > 0).toBeTruthy()
  }));

  it('create null grocerie', inject([GroceriesService], (service: GroceriesService) => {
    service.clean()
    let grocerie = null
    service.add(grocerie)
    expect(service.get().length == 0).toBeTruthy()
  }));

  it('edit some fields grocerie', inject([GroceriesService], (service: GroceriesService) => {
    service.clean()
    let grocerie = new Grocerie()
    grocerie.name = "Item 1"
    grocerie.unitOfMeasurement = UnityOfMeasurement.KG
    grocerie.quantity = 50
    grocerie.price = 50
    grocerie.spoils = true
    grocerie.expirationDate = new Date()
    grocerie.dateFactory = new Date()
    service.add(grocerie)

    grocerie.price = 100
    grocerie.spoils = false
    grocerie.name = "item 5"

    service.edit(grocerie, 0)
    expect(
      service.get()[0].price === 100 && 
      service.get()[0].spoils === false &&
      service.get()[0].name === "item 5").toBeTruthy()
  }));
});
