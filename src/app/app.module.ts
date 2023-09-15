import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscreverPostComponent } from './components/escrever-post/escrever-post.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './components/contato/contato.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    EscreverPostComponent,
    SobreMimComponent,
    ContatoComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
