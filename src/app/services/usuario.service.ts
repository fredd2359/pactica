import {Injectable} from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import {Usuario} from '../usuario/usuario';
import {GLOBAL} from './global'; 

@Injectable()
    export class UsuarioService{
        public url:string;
        public identity;
        public token;
        public id;

        constructor(
            private _http:Http
        ){
            this.url=GLOBAL.url;
        }

        getUsuarios(){

        }

        addUsuario(usuario_registrar){
            let params=JSON.stringify(usuario_registrar);
            let headers= new Headers({'Content-Type':'application/json'});
            return this._http.post(this.url+'register',params,{headers:headers})
            .map(res => res.json());
        }

        signup(usuario_login, gettoken=null){
            if(gettoken!=null){
                usuario_login.gettoken=gettoken;
            }
            let params=JSON.stringify(usuario_login);
            let headers=new Headers({'Content-Type':'application/json'});
            return this._http.post(this.url+'login',params,{headers:headers})
            .map(res => res.json());
        }

        getIdentity(){
            let identity=JSON.parse(localStorage.getItem('identity'));
            if (identity!="undefined"){
                this.identity=identity;
            }
            else{
                this.identity=null;
            }
            return this.identity;
        }

        gettoken(){
            let token=(localStorage.getItem('token'));
            if (token!="undefined"){
                this.token=token;
            }
            else{
                this.token=null;
            }
            return this.token;
        }

        updateUser(usuario_update){
            let params=JSON.stringify(usuario_update);
            let headers=new Headers({
                'Content-Type': 'application/json',
                'Authorization':this.gettoken()
            });

            return this._http.put(this.url+'update-user/'+usuario_update._id,params,{headers:headers})
            .map(res => res.json());
        }
    }
