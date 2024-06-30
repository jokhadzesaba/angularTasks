import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
})
export class Task5Component {
  @Input() value1?: string;
  @Input() value2?: string[];

  calculatePercentageMatch(item: string): number {
    if (this.value1 && item) {
      const lcsLength = this.longestCommonSubsequence(this.value1.toLowerCase(), item.toLowerCase());
      const maxLength = Math.max(this.value1.length, item.length);
      return (lcsLength / maxLength) * 100;
    }
    return 0;
  }

  private longestCommonSubsequence(s1: string, s2: string): number {
    const num: number[][] = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));

    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          num[i][j] = num[i - 1][j - 1] + 1;
        } else {
          num[i][j] = Math.max(num[i - 1][j], num[i][j - 1]);
        }
      }
    }

    return num[s1.length][s2.length];
  }
}
