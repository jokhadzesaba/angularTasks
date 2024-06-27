import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateRangeValidator, positionValidator } from '../validations';



@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component{
  public form: FormGroup;
  public costumValue:string = ''
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  get jobsFormArray(): FormArray {
    return this.form.get('jobs') as FormArray;
  }

  createJobForm(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      companyWebPage: ['', Validators.required],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([]),
    });
  }

  addJob() {
    const jobForm = this.createJobForm();
    this.jobsFormArray.push(jobForm);
  }

  removeJob(index: number) {
    this.jobsFormArray.removeAt(index);
  }

  addPositionForm(jobIndex: number) {
    const positions = this.jobsFormArray.at(jobIndex).get('positions') as FormArray;
    const group = this.fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required,positionValidator()],
      positionDescription: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    },{ validators: [dateRangeValidator(),positionValidator()], });
    
    positions.push(group);
  }

  removePosition(jobIndex: number, positionIndex: number) {
    const positions = this.jobsFormArray.at(jobIndex).get('positions') as FormArray;
    positions.removeAt(positionIndex);
  }

  getPositions(jobIndex: number): FormArray {
    return this.jobsFormArray.at(jobIndex).get('positions') as FormArray;
  }
}
