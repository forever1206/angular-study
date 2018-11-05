import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreatAngularComponent } from './great-angular/great-angular.component';


@NgModule({//为模块定义元数据
  declarations: [
    AppComponent,
    GreatAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
