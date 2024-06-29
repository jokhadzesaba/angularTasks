import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task4Component implements OnInit {
  public year: number = new Date().getFullYear();
  public monthIndex = new Date().getMonth();
  public monthName?: string;
  public currentMonthStartIndex?: number;
  public currentMonthEndIndex?: number;

  public weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {}
  public getCalendar(cYear: number, monthIndex: number) {
    const now = new Date(cYear, monthIndex);
    const year = now.getFullYear();
    const month = now.getMonth();
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const currnetDayIndex = now.getDay();
    const previousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    return this.fillCalendar(
      currnetDayIndex,
      year,
      month,
      previousMonth.getMonth(),
      nextMonth.getMonth(),
      daysInMonth
    );
  }
  public fillCalendar(
    indexOfday: number,
    year: number,
    month: number,
    previousMonth: number,
    nextMonth: number,
    daysInMonth: number
  ) {
    let days = [];
    let counter = 0;
    if (indexOfday > 0) {
      this.currentMonthStartIndex = indexOfday;
      for (let i = 0 - indexOfday; i < -1; i++) {
        days.push(new Date(year, previousMonth, i).getDate());
        counter++;
      }
    }
    for (let i = 0; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i).getDate());
      counter++;
    }
    if (counter > 35) {
      for (let i = 1; i <= 42 - counter; i++) {
        days.push(new Date(year, nextMonth, i).getDate());
      }
      if (this.currentMonthStartIndex) {
        this.currentMonthEndIndex = 42 - this.currentMonthStartIndex;
      }
    } else if (counter > 25 && counter < 35) {
      for (let i = 1; i <= 35 - counter; i++) {
        days.push(new Date(year, nextMonth, i).getDate());
      }
      if (this.currentMonthStartIndex) {
        this.currentMonthEndIndex = 35 - this.currentMonthStartIndex;
      }
    } else if (counter < 25) {
      for (let i = 1; i <= 25 - counter; i++) {
        days.push(new Date(year, nextMonth, i).getDate());
      }
      if (this.currentMonthStartIndex) {
        this.currentMonthEndIndex = 25 - this.currentMonthStartIndex;
      }
    }
    return days;
  }
  getMonthName() {
    return this.monthNames[this.monthIndex];
  }
  changeMonth(direction: 'up' | 'down') {
    if (direction === 'up') {
      if (this.monthIndex === 11) {
        this.monthIndex = 0;
        this.year++;
      } else {
        this.monthIndex++;
      }
    } else if (direction === 'down') {
      if (this.monthIndex === 0) {
        this.monthIndex = 11;
        this.year--;
      } else {
        this.monthIndex--;
      }
    }
    this.cd.detectChanges();
  }
}
