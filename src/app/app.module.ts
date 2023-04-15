import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
const appRoutes:Routes=[
  {path:'**', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
