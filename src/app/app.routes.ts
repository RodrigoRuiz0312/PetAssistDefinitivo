import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component'

export const routes: Routes = [

    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"registro",
        component:RegistroComponent
    },
    {
        path:"about",
        component:AboutComponent
    }
];