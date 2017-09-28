import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GuardarEmailComponent} from './components/guardar-email/guardar-email.component';
import {MostrarEmailComponent} from './components/mostrar-email/mostrar-email.component';
import {MainEmailComponent} from './components/main-email/main-email.component';
import {FormsModule} from '@angular/forms';

//decorador ngmodule para cargar los componentes y configuracion del mmodulo
@NgModule({
    imports:[
        CommonModule, 
        FormsModule
    ],

    declarations:[
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports:[
        MainEmailComponent
    ]
})

export class ModuloEmailModule{

}

