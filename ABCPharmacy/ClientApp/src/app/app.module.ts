import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SalePostsComponent } from './sale-posts/sale-posts.component';
import { SalePostComponent } from './sale-post/sale-post.component';
import { SalePostAddEditComponent } from './sale-post-add-edit/sale-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SalePostsComponent,
    SalePostComponent,
    SalePostAddEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
