import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component'
declare var $:any;//declaramos variable jquery
declare var jQuery:any;//declaramos variable jquery

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
