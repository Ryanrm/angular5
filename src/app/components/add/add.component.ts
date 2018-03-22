import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title: string;
  ingredients: string;
  instructions: string;
  formdata: FormGroup;
  constructor(FormBuilder: FormBuilder) { 
    this.formdata = FormBuilder.group({
      title: ["", Validators.required],
      ingredients:  ["", Validators.required],
      instructions:  ["", Validators.required]
      
    })  

  }
  ngOnInit() {

  }

  onClickSubmit(post) {
    this.title = post.title;
    this.ingredients = post.ingredients;
    this.instructions = post.instructions;
  }
}
