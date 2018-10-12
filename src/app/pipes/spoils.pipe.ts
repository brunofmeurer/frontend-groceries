import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'spoils'})
export class SpoilsPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sim' : 'Não'
  }
}