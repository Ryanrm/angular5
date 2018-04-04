import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddComponent } from './components/add/add.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AddComponent,
        HeaderComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'add', component: AddComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', redirectTo: 'home', pathMatch: 'full'}  
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },
      [AuthService]],
      schemas: [NO_ERRORS_SCHEMA]
      
    }).compileComponents();
  }));
  it('s ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Ryan Meyer'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ryan Meyer');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Login here');
  }));
});
