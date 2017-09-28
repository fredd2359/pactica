import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component'; 
import {UserEditComponent} from './admin/components/user-edit/user-edit.component';

const appRoutes:Routes=[
    
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'',component:AppComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'mis-datos',component:UserEditComponent},
    {path:'**',redirectTo:'home', pathMatch:'full'}

];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
