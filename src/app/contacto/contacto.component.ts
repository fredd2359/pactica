import {Component} from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/core';
import {fadeIn} from '../admin/components/animation';

@Component({
    selector:'contacto',
    templateUrl: './contacto.component.html',
    animations:[
        trigger('marcar',[
            state('inactive',style({
                border:'5px solid #ccc'
            })),
            state('active',style({
                border:'5px solid yellow',
                background:'red',
                borderRadius:'50px',
                transform:'scale(.9)'
            })),
            transition('inactive => active',animate('3s linear')),
            transition('active => inactive',animate('3s linear'))
        ]),
        fadeIn
    ],
})

export class ContactoComponent{
    public state ='inactive';

    cambiarEstado(state){
        if (this.state=='inactive'){
            this.state='active'
        }
        else{
            this.state='inactive'
        }
    }
}