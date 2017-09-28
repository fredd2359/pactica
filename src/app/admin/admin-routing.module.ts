import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';
import {MainComponent} from './components/main/main.component';
import {ListComponent} from './components/list/list.component';
import {AdminGuard} from '../services/admin.guard'
 
const adminRoutes: Routes=[
    {
        path: 'admin-main',
        component: MainComponent,
        canActivate:[AdminGuard],
        children: [
            {path: '', redirectTo:'listado', pathMatch:'full'},
            {path: 'listado', component:ListComponent},
            {path: 'agregar', component:AddComponent},
            {path: 'editar', component:EditComponent},
            {path: '**', redirectTo:'listado', pathMatch:'full'}
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AdminRoutingModule{}