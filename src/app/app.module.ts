import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { TableauComponent } from './tableau/tableau.component';
import { TableauModule } from "./tableau/tableau.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableauComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    TableauModule
    ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
