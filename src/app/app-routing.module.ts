import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add/add.component';
import { DetailTutorialComponent } from './components/animation/detail-tutorial.component';
import { EditTutorialComponent } from './components/edit/edit.component';
import { ListTutorialComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch:'full'},
  {path: "home", component:DetailTutorialComponent},
  {path: 'students', component: ListTutorialComponent},
  {path: "students/id", component: DetailTutorialComponent},
  {path: "students/add", component: AddTutorialComponent},
  {path: "students/edit/:id", component: EditTutorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
