import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
    selector: 'guardar-email',
    template: `
        <h4>{{title}}</h4>
        <input type="text" [(ngModel)]="emailContacto"/>
        <button (click)="guardarEmail()">Guardar Email</button>
    `
})

export class GuardarEmailComponent{
    title="guardar Email";
    emailContacto:string;

    guardarEmail(){
        localStorage.setItem('emailContacto',this.emailContacto);
    }

    
}