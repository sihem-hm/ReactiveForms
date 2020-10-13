import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'Reactive', component: ReactiveFormsComponent },
  { path: '', redirectTo: '/Reactive',  pathMatch: 'full'},
  { path: 'forms', component: TemplateFormsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  