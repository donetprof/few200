import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, featureName } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: 'media',
    component: MediaComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [MediaComponent, DashboardComponent, ListComponent, CreateComponent, ItemListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    ReactiveFormsModule
  ]
})
export class MediaModule { }
