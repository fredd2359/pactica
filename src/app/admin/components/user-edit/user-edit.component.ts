import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {Usuario} from '../../../usuario/usuario';
import {GLOBAL} from '../../../services/global';
import {UsuarioService} from '../../../services/usuario.service'; 

@Component({
    selector:'user-edit',
    templateUrl: './user-edit.component.html',
    providers:[
        UsuarioService
    ]
})

export class UserEditComponent implements OnInit{
    public title:string;
    public usu:Usuario;
    public identity;
    public token;
    public status;

    constructor(
        private _usuarioService:UsuarioService
    ){
        this.title='Actualizar datos';
        this.identity=this._usuarioService.getIdentity();
        this.token=this._usuarioService.gettoken();
        this.usu=this.identity;
    }

    ngOnInit(){
        console.log('Se ha cargado el componente');
    }

    onSubmit(){
        this._usuarioService.updateUser(this.usu).subscribe(
            response =>{
                console.log('aqui');
                if (!response.user){
                    this.status='error';
                }
                else{
                    this.status='success';
                    localStorage.setItem('identity',JSON.stringify(this.usu));
                    //imagen
                }
            },
            error => {
                var errorMessage=<any>error;
                if (errorMessage!=null){
                    this.status='error';
                }
            }
        )
    }
}