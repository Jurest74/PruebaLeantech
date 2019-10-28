import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    function HelloController($scope) {
 }
   }

  ngOnInit() {
    this.myForm = this.fb.group ({
    inputs: this.fb.array([])})
  }

  get inputForms() {
  return this.myForm.get('inputs') as FormArray
}

addinput() {
  console.log("entro a la funcion")
  const input = this.fb.group({
  })
  this.inputForms.push(input);
}

deleteinput(i) {
  this.inputForms.removeAt(i)
}
}
