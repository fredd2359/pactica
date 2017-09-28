import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../services/usuario.service';
import {fadeIn} from '../admin/components/animation';

@Component({
    selector:'login',
    templateUrl: './login.component.html',
    animations:[fadeIn]
})

export class LoginComponent{
    public title:string;
    public usu:Usuario;
    public identity;
    public token;
    public status:string;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _usuarioService:UsuarioService
    ){
        this.title='Login';
        this.usu=new Usuario("","","","","");
    }

    ngOnInit(){
        console.log('login.component cargado');
        console.log(this._usuarioService.getIdentity());
        console.log(this._usuarioService.gettoken());
    }

    onSubmit(){
        //logear usuario y conseguir el objeto
        this._usuarioService.signup(this.usu).subscribe(
            response =>{
                this.identity=response.issetUser;
                if(!this.identity || !this.identity._id){
                    alert('El usuario no ha entrado');
                }
                else{
                    localStorage.setItem('identity',JSON.stringify(this.identity));
                    //mostrar identity
                    console.log(this.identity);
                    //conseguir el token
                    this._usuarioService.signup(this.usu,'true').subscribe(
                        response =>{
                            this.token=response.token;
                            if(this.token<=0){
                                alert('El token no se ha generado');
                            }
                            else{
                                localStorage.setItem('token',(this.token));
                                console.log(this.token);
                                this.status='success';
                                this._router.navigate(['/home']);
                            }
                        },  
                        error => {
                            var errorMessage=(<any>error);
                            if (errorMessage!=null){
                                var body=JSON.parse(error._body);
                                this.status='error';
                            }
                        }
                    );
                }
            },  
            error => {
                var errorMessage=(<any>error);
                if (errorMessage!=null){
                    var body =JSON.parse(error._body);
                    this.status='error';
                }
            }
        );
    }
}