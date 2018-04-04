import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../add/add.component';
import { AppComponent } from '../../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        AppComponent,
        HomeComponent,
        AddComponent,
        HeaderComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        AngularFireAuthModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'add', component: AddComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: '**', redirectTo: 'home', pathMatch: 'full'}  
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' },
      [AuthService]],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
