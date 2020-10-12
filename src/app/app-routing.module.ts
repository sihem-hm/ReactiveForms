import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'Reactive', component: ReactiveFormsComponent },
  { path: 'forms', component: TemplateFormsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
