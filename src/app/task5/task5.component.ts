import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
})
export class Task5Component {
  value1: string = '';
  value2: string[] = [];

  constructor() {}
  

  updateValue2(value: string): void {
    this.value2 = value.split(',').map(item => item.trim());
  }
  calculateLevenshteinDistance(s1: string, s2: string): number {
    if (s1.length < s2.length) {
      [s1, s2] = [s2, s1];
    }

    if (s2.length === 0) {
      return s1.length;
    }

    let previousRow = Array.from({ length: s2.length + 1 }, (_, i) => i);
    for (let i = 0; i < s1.length; i++) {
      let currentRow = [i + 1];
      for (let j = 0; j < s2.length; j++) {
        const insertions = previousRow[j + 1] + 1;
        const deletions = currentRow[j] + 1;
        const substitutions = previousRow[j] + (s1[i] !== s2[j] ? 1 : 0);
        currentRow.push(Math.min(insertions, deletions, substitutions));
      }
      previousRow = currentRow;
    }

    return previousRow[previousRow.length - 1];
  }

  calculateSimilarityPercentage(s1: string, s2: string): number {
    const levDistance = this.calculateLevenshteinDistance(s1, s2);
    const maxLength = Math.max(s1.length, s2.length);
    return ((1 - levDistance / maxLength) * 100);
  }

  calculateSimilarity(s1: string, s2: string): number {
    return this.calculateSimilarityPercentage(s1, s2);
  }
}
