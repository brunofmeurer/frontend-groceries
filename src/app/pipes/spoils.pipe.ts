import { Pipe, PipeTransform } from '@angular/core';

/**
 * @author Bruno Meurer
 * @description pipe to change boolean visualization
 */
@Pipe({name: 'spoils'})
export class SpoilsPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sim' : 'Não'
  }
}