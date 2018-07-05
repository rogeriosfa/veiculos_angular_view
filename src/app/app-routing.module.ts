import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoNewComponent } from './veiculos/veiculo-new/veiculo-new.component';
import { VeiculoEditComponent } from './veiculos/veiculo-edit/veiculo-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/veiculos', pathMatch: 'full' },
    {
        path: 'veiculos', children: [
            { path: '', component: VeiculosComponent },
            { path: 'new', component: VeiculoNewComponent },
            { path: ':id', component: VeiculoEditComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
