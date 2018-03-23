import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Recipes {
  title: string;
  instructions: string;
  ingredients: string;
}

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
  postsCol: AngularFirestoreCollection<Recipes>;
  constructor(FormBuilder: FormBuilder, private afs: AngularFirestore) { 
    this.formdata = FormBuilder.group({
      title: ["", Validators.required],
      ingredients:  ["", Validators.required],
      instructions:  ["", Validators.required]
      
    })  

  }
  ngOnInit() {
    this.postsCol = this.afs.collection('recipes');

  }

  onClickSubmit(post) {
    this.title = post.title;
    this.ingredients = post.ingredients;
    this.instructions = post.instructions;
    this.afs.collection('recipes').add({'title': this.title, 'ingredients': this.ingredients, 
                                          'instructions': this.instructions});
  }
}
