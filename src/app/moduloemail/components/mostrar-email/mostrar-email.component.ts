import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
    selector: 'mostrar-email',
    template: `
        <h4>{{title}}</h4>
        <span *ngIf="emailContacto">
            Email de contacto: {{emailContacto}}
            <button (click)="borrarEmail()">Eliminar Email</button>
        </span>
    `
})

export class MostrarEmailComponent implements OnInit, DoCheck{
    title="Mostrar email";
    emailContacto:string;

    ngOnInit(){
        this.emailContacto=localStorage.getItem('emailContacto');    
    }

    ngDoCheck(){
        this.emailContacto=localStorage.getItem('emailContacto');
    }

    borrarEmail(){
        localStorage.removeItem('emailContacto');
        localStorage.clear;
        this.emailContacto=null;
    }
}