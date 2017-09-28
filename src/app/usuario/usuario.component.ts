import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Usuario} from './usuario';
import {UsuarioService} from '../services/usuario.service';
import {fadeIn} from '../admin/components/animation';

declare var $;

@Component({
    selector: 'usuario',
    templateUrl: './usuario.component.html',
    animations:[fadeIn]
})

export class UsuarioComponent{
    public usu:Usuario;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router:Router,
        private _usuarioService:UsuarioService
    ){
        this.usu=new Usuario("","","","","");
    }

    ngOnInit(){
        console.log(this._usuarioService.addUsuario);
        $('#date').datepicker({
            // format: "dd/mm/yyyy",
            format: "yyyy-mm-dd",
            startDate: "01/01/1920",
            language: "es",
            todayHighlight: true
        
        })
        .on(
            'change',e => this.usu.fecha = e.target.value
        );


    }

    onSubmit(){
        this._usuarioService.addUsuario(this.usu).subscribe(
            response => {
                console.log(response);
                if( response.user && response.user._id){
                    this.usu=response.usu;
                    this.status='success';
                    this.usu=new Usuario("","","","","");
                }
                else{
                    this.status='error'; 
                } 
            },
            error =>{
                console.log(<any>error);
            }
        );
    }

}
