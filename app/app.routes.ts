import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Clientes } from './paginas/clientes/clientes';
import { Formulario } from './paginas/formulario/formulario';

export const routes: Routes = [
    {path:"inicio", component:Inicio},
    {path:"clientes", component:Clientes},
    {path:"formulario", component:Formulario}
];
