import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwSocialButtonsModule

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
