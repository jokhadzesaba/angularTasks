import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[directive]', // Adjust selector as per your usage
})
export class DiscolorationDirective implements OnChanges {
  @Input() currentIndex?: number;
  @Input() monthStartIndex?: number;
  @Input() monthEndIndex?: number;
  @Input() currentMonthIndex?: number;
  @Input() currentDay?: number;
  
  public holidays = [
    { month: 1, day: 1, name: 'New Year\'s Day' },
    { month: 2, day: 14, name: 'Valentine\'s Day' },
    { month: 4, day: 21, name: 'Easter Sunday' },
    { month: 5, day: 12, name: 'Mother\'s Day' },
    { month: 6, day: 16, name: 'Father\'s Day' },
    { month: 7, day: 4, name: 'Independence Day' },
    { month: 9, day: 2, name: 'Labor Day' },
    { month: 10, day: 31, name: 'Halloween' },
    { month: 11, day: 11, name: 'Veterans Day' },
    { month: 12, day: 25, name: 'Christmas Day' }
  ];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentMonthIndex'] || changes['currentDay']) {
      this.changeColor();
    }
  }

  private changeColor() {
    if (
      this.currentIndex !== undefined &&
      this.monthStartIndex !== undefined &&
      this.monthEndIndex !== undefined &&
      this.currentMonthIndex !== undefined &&
      this.currentDay !== undefined
    ) {
      if (this.currentIndex < this.monthStartIndex || this.currentIndex > this.monthEndIndex) {
        this.el.nativeElement.style.backgroundColor = '#EEE4E4';
      } else {
        const isHoliday = this.holidays.some(holiday => {
          return holiday.month === this.currentMonthIndex && holiday.day === this.currentDay;
        });
        if (isHoliday) {
          this.el.nativeElement.style.backgroundColor = '#D45555';
        } else {
          this.el.nativeElement.style.backgroundColor = ''; // Reset background color if not a holiday
        }
      }
    }
  }
}
