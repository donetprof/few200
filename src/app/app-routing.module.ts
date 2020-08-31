import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './containers/todo/todo.component';
import { CommunicationsComponent } from './containers/communications/communications.component';
import { CounterComponent } from './containers/counter/counter.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'communications',
    component: CommunicationsComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
