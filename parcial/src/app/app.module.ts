import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CafeModule } from './cafe/cafe.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeListarComponent } from './cafe-listar/cafe-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';

@NgModule({
  declarations: [
    AppComponent,
    CafeListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule,
    HttpClientModule
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
