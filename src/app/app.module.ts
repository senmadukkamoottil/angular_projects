import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpBackend } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convet-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './products/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products/create', component: CreateComponent},
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
