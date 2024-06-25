import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    switch (value){
      case Color.red:
        return 'rojo';
      case Color.black:
        return 'negro';
      case Color.blue:
        return 'azúl';
      case Color.green:
        return 'verde';
      default:
        return 'rojo';
    }
  }
}
