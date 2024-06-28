import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormat',
})
export class StringFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    switch (value) {
      case 'videoGames':
        return 'Video Games';
      case 'tvSeries':
        return 'TV Series';
      case 'tvSpecial':
        return 'TV Special'  
      default:
        // Add a space before capital letters
        return (value.charAt(0).toUpperCase() + value.substring(1)).replace(/([a-z])([A-Z])/g, '$1 $2');
    }
  }
}
