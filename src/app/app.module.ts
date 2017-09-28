import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import {HttpModule} from '@angular/http';
import {UsuarioService} from './services/usuario.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

//importat modulos
import {ModuloEmailModule} from './moduloemail/moduloemail.module';
import {AdminModule} from './admin/admin.module';

import { AppComponent } from './app.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {UsuarioComponent} from './usuario/usuario.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {UserEditComponent} from './admin/components/user-edit/user-edit.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    ContactoComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    routing,
    HttpModule,
    ModuloEmailModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
