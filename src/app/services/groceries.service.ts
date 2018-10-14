import { Injectable } from '@angular/core';
import { Grocerie } from '../models/Grocerie';

/**
 * @author Bruno Meurer
 * @description groceries service
 */
@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  /**
   * @description key of 'bucket' on local storage
   */
  private key:string = "GROCERIES"

  /**
   * 
   * @param grocerie 
   * @description add grocerie to list
   */
  add(grocerie: Grocerie) {
    if (grocerie == null) {
      return;
    }
    let list = this.get()
    list.push(grocerie)
    this.set(list)
  }

  /**
   * 
   * @param grocerie 
   * @param index 
   * @description edit grocerie and set list
   */
  edit(grocerie: Grocerie, index: number) {
    if (grocerie == null) {
      return;
    }
    let list = this.get()
    list[index] = grocerie
    this.set(list)
  }

  /**
   * 
   * @param index 
   * @description find grocerie by index
   * @returns Promise<Grocerie>
   */
  find(index: number):Promise<Grocerie> {
    return new Promise<Grocerie>((resolve, reject) => {
      setTimeout(() => {
        let list = this.get()
        // local storage do not save objects, so i'm convert again
        if (list[index] != null) {
          list[index].expirationDate = new Date(list[index].expirationDate)
          list[index].dateFactory = new Date(list[index].dateFactory)
        }
        resolve(<Grocerie> list[index])
      }, 1000) // deplay simulation
    })
  }

  /**
   * 
   * @param index 
   * @description delete grocerie and set list
   * @returns Promise<boolean>
   */
  delete(index: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        let list = this.get()
        list.splice(index, 1)
        this.set(list)
        resolve(true)
      }, 1000) // delay simulation
    })
  }

  /**
   * 
   * @param data 
   * @description set data on local storage
   */
  private set(data: any) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  /**
   * @description get list on local storage
   * @returns Array<Grocerie>
   */
  get(): Array<Grocerie> {
    try {
      let array = JSON.parse(localStorage.getItem(this.key));
      return array != null ? array : [];
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return [];
    }
  }

  /**
   * @description list saved groceries
   * @returns Promise<Array<Grocerie>>
   */
  list(): Promise<Array<Grocerie>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(JSON.parse(localStorage.getItem(this.key)));
        } catch (e) { // if not exist list
          resolve([]);
        }
      }, 1000) // delay simulation
    })
  }

  /**
   * @de
   */
  clean() {
    this.set([])
  }
}
