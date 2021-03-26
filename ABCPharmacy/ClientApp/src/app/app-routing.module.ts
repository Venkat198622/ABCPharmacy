import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalePostsComponent } from './sale-posts/sale-posts.component';
import { SalePostComponent } from './sale-post/sale-post.component';
import { SalePostAddEditComponent } from './sale-post-add-edit/sale-add-edit.component';

const routes: Routes = [
  { path: '', component: SalePostsComponent, pathMatch: 'full' },
  { path: 'sales/:id', component: SalePostComponent },
  { path: 'add', component: SalePostAddEditComponent },
  { path: 'sales/edit/:id', component: SalePostAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
