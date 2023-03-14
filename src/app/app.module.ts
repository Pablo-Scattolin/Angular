import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { DescripcionModule } from './@components/descripcion/descripcion.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarModule } from './@components/navbar/navbar.module';
import { PortfolioModule } from './@components/portfolio/portfolio.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    CopyrightModule,
    DescripcionModule,
    HeaderModule,
    NavbarModule,
    PortfolioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
