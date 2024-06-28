import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reformatDate',
})
export class ReformatDatePipe implements PipeTransform {
  transform(value: string): string | number {
    if (value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/)) {
      const date = new Date(value);
      // const hours = this.zeroStart(date.getHours());
      // const minutes = this.zeroStart(date.getMinutes());
      // const seconds = this.zeroStart(date.getSeconds());
      // const month = this.getMonthName(date.getMonth());
      // const day = this.zeroStart(date.getDate());
      // const year = date.getFullYear();
      const hours = this.zeroStart(date.getUTCHours());
      const minutes = this.zeroStart(date.getUTCMinutes());
      const seconds = this.zeroStart(date.getUTCSeconds());
      const month = this.getMonthName(date.getUTCMonth());
      const day = this.zeroStart(date.getUTCDate());
      const year = date.getUTCFullYear();

      return `${hours}:${minutes}:${seconds} ${month} ${day} ${year}`;
    } else {
      return value;
    }
  }
  private zeroStart(n: number) {
    return n < 10 ? '0' + n : n;
  }
  private getMonthName(monthIndex: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months[monthIndex];
  }
}
