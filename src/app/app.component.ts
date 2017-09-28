import { Component, OnInit, DoCheck } from '@angular/core';
import {UsuarioService} from './services/usuario.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app';
  public identity;

  constructor(
    private _usuarioService:UsuarioService,
    private _router:Router
  ){
    this.title
  }

  ngOnInit(){
    this.identity=this._usuarioService.getIdentity();
  }

  //esto es para que al momento de que se haga un 
  //cambio en la pagina que revise el usuario
  //comprobando los datos del storage 
  ngDoCheck(){
    this.identity=this._usuarioService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity=null;
    this._router.navigate(['/home']);
  }

}
