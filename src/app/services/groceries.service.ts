import { Injectable } from '@angular/core';
import { Grocerie } from '../models/Grocerie';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  constructor() { }
  key:string = "GROCERIES"

  add(grocerie: Grocerie) {
    let list = this.get()
    console.log(list)
    list.push(grocerie)
    this.set(list)
  }

  delete(index: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        let list = this.get()
        list.splice(index, 1)
        this.set(list)
        resolve(true)
      }, 200) // delay simulation
    })
  }

  private set(data: any): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(): Array<Grocerie> {
    try {
      let array = JSON.parse(localStorage.getItem(this.key));
      return array != null ? array : [];
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return [];
    }
  }

  list(): Promise<Array<Grocerie>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(JSON.parse(localStorage.getItem(this.key)));
        } catch (e) { // if not exist list
          resolve([]);
        }
      }, 200) // delay simulation
    })
  }
}
