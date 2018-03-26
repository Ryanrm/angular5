import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recipes } from '../../interfaces/recipe';
import { RecipeID } from '../../interfaces/recipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipeCol: AngularFirestoreCollection<Recipes>;
  recipes: any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.recipeCol = this.afs.collection('recipes');
    this.recipes = this.recipeCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Recipes;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  deletePost(recipeId) {
    this.afs.doc('recipes/'+recipeId).delete();
  }
}
