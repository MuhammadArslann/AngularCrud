import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add/add.component';
import { DetailTutorialComponent } from './components/animation/detail-tutorial.component';
import { ListTutorialComponent } from './components/list/list.component';
import { EditTutorialComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    DetailTutorialComponent,
    ListTutorialComponent,
    EditTutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
