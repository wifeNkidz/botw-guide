import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BotwItemsComponent } from './botw-items/botw-items.component';
import { RouterModule, Routes } from '@angular/router';
import { BotwItem } from './botw-item/botw-item';

const appRoutes: Routes = [
  { path: 'botw-items', component: BotwItemsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BotwItemsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
    { enableTracing: true }
  ),
    BrowserModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
